const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendJson(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return sendJson(res, 200, {
      ok: true,
      service: 'portfolio-contact',
      configured: Boolean(process.env.RESEND_API_KEY),
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return sendJson(res, 405, { ok: false, message: 'Method not allowed.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { name = '', email = '', message = '', website = '' } = body;

    // Hidden honeypot field. Bots that fill it receive a harmless success response.
    if (website) return sendJson(res, 200, { ok: true });

    const cleanName = String(name).trim().slice(0, 120);
    const cleanEmail = String(email).trim().slice(0, 254);
    const cleanMessage = String(message).trim().slice(0, 5000);

    if (!cleanName || !EMAIL_RE.test(cleanEmail) || cleanMessage.length < 10) {
      return sendJson(res, 400, {
        ok: false,
        message: 'Please enter a valid name, email and message (at least 10 characters).',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || 'manikandan270706@gmail.com';
    const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    if (!apiKey) {
      return sendJson(res, 503, {
        ok: false,
        message: 'The portfolio email service is not configured. Add RESEND_API_KEY in Vercel Environment Variables.',
      });
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: cleanEmail,
        subject: `Portfolio inquiry from ${cleanName}`,
        text: [
          'New message from your portfolio',
          '',
          `Name: ${cleanName}`,
          `Email: ${cleanEmail}`,
          '',
          'Message:',
          cleanMessage,
        ].join('\n'),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#172033">
            <h2>New portfolio message</h2>
            <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap">${escapeHtml(cleanMessage)}</p>
          </div>
        `,
      }),
    });

    const data = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      console.error('Resend error:', data);
      return sendJson(res, 502, {
        ok: false,
        message: 'The message could not be delivered. Please try again or email me directly.',
      });
    }

    return sendJson(res, 200, {
      ok: true,
      message: 'Message sent successfully. I will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return sendJson(res, 500, {
      ok: false,
      message: 'Something went wrong while sending the message. Please try again.',
    });
  }
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
