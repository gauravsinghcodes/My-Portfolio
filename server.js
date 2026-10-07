import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields.' });
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const user = process.env.SMTP_USER || '';
    const pass = process.env.SMTP_PASS || '';
    const toEmail = process.env.TO_EMAIL || user || 'gs7august@gmail.com';

    if (!user || !pass) {
      return res.status(400).json({
        error: 'SMTP credentials not configured. Please add SMTP_USER and SMTP_PASS in your .env file.',
        missingCredentials: true
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const replySubject = encodeURIComponent(subject ? `Re: ${subject}` : 'Re: Portfolio Inquiry');

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: toEmail,
      subject: subject ? `${subject}` : `New Portfolio Message from ${name}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #4f46e5 100%); padding: 32px 28px; text-align: left;">
              <span style="display: inline-block; background-color: rgba(255, 255, 255, 0.2); padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.08em;">
                Portfolio Inquiry
              </span>
              <h1 style="margin: 12px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 800; line-height: 1.25; letter-spacing: -0.02em;">
                New Message from ${name}
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 28px 24px;">
              
              <!-- Sender Information Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 24px; border-collapse: separate;">
                <tr>
                  <td style="padding: 14px 16px; border-bottom: 1px solid #e2e8f0; width: 50%;">
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.06em; display: block; margin-bottom: 4px;">
                      Sender Name
                    </span>
                    <strong style="font-size: 15px; color: #0f172a; font-weight: 600; display: block;">
                      ${name}
                    </strong>
                  </td>
                  <td style="padding: 14px 16px; border-bottom: 1px solid #e2e8f0; width: 50%;">
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.06em; display: block; margin-bottom: 4px;">
                      Sender Email
                    </span>
                    <a href="mailto:${email}" style="font-size: 14px; color: #6d28d9; font-weight: 600; text-decoration: none; word-break: break-all;">
                      ${email}
                    </a>
                  </td>
                </tr>
                ${subject ? `
                <tr>
                  <td colspan="2" style="padding: 14px 16px;">
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.06em; display: block; margin-bottom: 4px;">
                      Subject
                    </span>
                    <strong style="font-size: 15px; color: #0f172a; font-weight: 600; display: block;">
                      ${subject}
                    </strong>
                  </td>
                </tr>
                ` : ''}
              </table>

              <!-- Message Details Header -->
              <div style="margin-bottom: 8px; padding-left: 2px;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.06em;">
                  Message Details
                </span>
              </div>

              <!-- Message Text Box -->
              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #7c3aed; border-radius: 8px; padding: 20px; font-size: 15px; line-height: 1.65; color: #334155; white-space: pre-wrap; word-break: break-word; margin-bottom: 28px;">${message}</div>

              <!-- Reply Action CTA -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=${replySubject}" style="display: inline-block; background: linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 10px; box-shadow: 0 4px 14px rgba(109, 40, 217, 0.35);">
                      Reply Direct to ${name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 24px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.5;">
                Portfolio Direct Mailer • Received message for <strong>${toEmail}</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully via SMTP!' });

  } catch (err) {
    console.error('SMTP Email Error:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email via SMTP server.' });
  }
});

app.listen(PORT, () => {
  console.log(`SMTP Express Mail Server running on http://localhost:${PORT}`);
});
