import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json({ limit: "1mb" }));

// Simple API health check
app.get("/api/contact", (req, res) => {
  res.status(200).json({
    ok: true,
    service: "Portfolio Contact API",
    configured: Boolean(process.env.RESEND_API_KEY),
  });
});

// Rate limit contact-form submissions
// Maximum 5 requests from one IP every 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    ok: false,
    error: "Too many messages. Please try again after 15 minutes.",
  },
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, message, website } = req.body || {};

    // Honeypot spam protection
    if (website) {
      return res.status(200).json({
        ok: true,
      });
    }

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        ok: false,
        error: "Name, email and message are required.",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        ok: false,
        error: "Please enter a valid email address.",
      });
    }

    // Check Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return res.status(500).json({
        ok: false,
        error: "Email service is not configured.",
      });
    }

    // Send email through Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ||
          "Portfolio Contact <onboarding@resend.dev>",

        to: [
          process.env.CONTACT_TO_EMAIL ||
            "manikandan270706@gmail.com",
        ],

        reply_to: email.trim(),

        subject: `New Portfolio Message from ${name.trim()}`,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #111827;
              max-width: 700px;
              margin: 0 auto;
            "
          >

            <h2 style="margin-bottom: 20px;">
              New Portfolio Contact
            </h2>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              <a href="mailto:${escapeHtml(email)}">
                ${escapeHtml(email)}
              </a>
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div
              style="
                padding: 16px;
                background: #f3f4f6;
                border-radius: 10px;
                white-space: pre-wrap;
                margin-bottom: 20px;
              "
            >
              ${escapeHtml(message)}
            </div>

            <hr
              style="
                border: none;
                border-top: 1px solid #e5e7eb;
                margin: 24px 0;
              "
            />

            <p
              style="
                color: #6b7280;
                font-size: 13px;
              "
            >
              Sent from the contact form on your portfolio website.
            </p>

          </div>
        `,
      }),
    });

    const data = await response.json().catch(() => ({}));

    // Resend returned an error
    if (!response.ok) {
      console.error("Resend API error:", data);

      return res.status(response.status).json({
        ok: false,
        error:
          data?.message ||
          data?.error ||
          "Unable to send email.",
      });
    }

    console.log("Portfolio contact email sent successfully.");

    return res.status(200).json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      ok: false,
      error: "Unable to send the message.",
    });
  }
});

// Escape HTML to prevent HTML injection
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

app.listen(PORT, () => {
  console.log("");
  console.log("======================================");
  console.log(" Portfolio Contact API");
  console.log("======================================");
  console.log(` API: http://localhost:${PORT}/api/contact`);
  console.log(
    ` Email configured: ${Boolean(
      process.env.RESEND_API_KEY
    )}`
  );
  console.log(" Rate limit: 5 messages / 15 minutes");
  console.log("======================================");
  console.log("");
});