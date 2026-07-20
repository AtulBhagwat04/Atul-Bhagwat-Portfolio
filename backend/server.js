const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Performance Middlewares
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// Healthcheck Route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", service: "Portfolio Backend", timestamp: new Date() });
});

// Contact API Route
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    const gmailUser = process.env.GMAIL_USER || "atulbhagwat12@gmail.com";
    const gmailPass = process.env.GMAIL_PASS;

    // Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass || "sample_app_password",
      },
    });

    // Email to you (Atul) containing the message details
    const mailOptions = {
      from: `"${name}" <${gmailUser}>`, // Must authenticate with user account to prevent SPF violations
      replyTo: email, // Direct reply to the sender's entered email address
      to: gmailUser,
      subject: `[Portfolio Inquiry] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; background: #050505; color: #fff; border-radius: 12px; border: 1px solid #34F58A; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #34F58A; border-bottom: 1px solid #222; padding-bottom: 10px; margin-bottom: 20px;">New Portfolio Inquiry</h2>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #34F58A; text-decoration: none;">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
          <p style="margin: 15px 0 5px 0;"><strong>Message:</strong></p>
          <div style="background: #111418; padding: 15px; border-radius: 8px; border: 1px solid #232931; color: #B5BBC7; line-height: 1.6; white-space: pre-line;">
            ${message}
          </div>
        </div>
      `,
    };

    // Auto-response confirmation email to the visitor's entered email address
    const autoResponderOptions = {
      from: `"Atul Bhagwat" <${gmailUser}>`,
      to: email,
      subject: `Re: [Inquiry Received] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; background: #050505; color: #fff; border-radius: 12px; border: 1px solid #34F58A; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #34F58A; border-bottom: 1px solid #222; padding-bottom: 10px; margin-bottom: 20px;">Hello ${name},</h2>
          <p>Thank you for reaching out! I have received your message regarding: <strong>"${subject}"</strong>.</p>
          <p>Here is a copy of your submitted inquiry:</p>
          <div style="background: #111418; padding: 15px; border-radius: 8px; border: 1px solid #232931; color: #B5BBC7; line-height: 1.6; white-space: pre-line; margin-bottom: 20px;">
            ${message}
          </div>
          <p>I will review your message and get back to you as soon as possible.</p>
          <hr style="border: 0; border-top: 1px solid #222; margin: 20px 0;" />
          <p style="font-size: 11px; color: #888; text-align: center;">This is an automated confirmation of your message submission from Atul's Developer Portfolio.</p>
        </div>
      `,
    };

    if (gmailPass && gmailPass !== "your_gmail_app_password_here") {
      // Send message to you (Atul)
      await transporter.sendMail(mailOptions);
      
      // Send auto-response to the visitor
      try {
        await transporter.sendMail(autoResponderOptions);
      } catch (autoErr) {
        console.error("Auto-responder Dispatch Error:", autoErr);
      }
    } else {
      console.log("Mock Email Dispatch (To Atul):", mailOptions);
      console.log("Mock Email Dispatch (Auto-Response to Visitor):", autoResponderOptions);
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent to Atul Bhagwat!",
    });
  } catch (err) {
    console.error("Backend Contact Error:", err);
    return res.status(500).json({ success: false, error: "Failed to dispatch email." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Express server listening on port ${PORT}`);
});
