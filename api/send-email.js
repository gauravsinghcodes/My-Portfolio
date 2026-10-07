import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

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
        error: 'SMTP credentials missing. Please set SMTP_USER and SMTP_PASS environment variables in your deployment settings (e.g. Vercel Environment Variables).',
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

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: toEmail,
      subject: subject ? `[Portfolio Contact] ${subject}` : `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; background-color: #0f172a; color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 16px; padding: 30px; border: 1px solid #334155; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
            <div style="text-align: center; margin-bottom: 24px;">
              <h2 style="color: #a78bfa; margin: 0; font-size: 24px; font-weight: 700;">New Contact Form Submission</h2>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;" />
            
            <div style="margin-bottom: 16px;">
              <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #a78bfa; letter-spacing: 0.05em;">Sender Name</span>
              <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #ffffff;">${name}</p>
            </div>
            
            <div style="margin-bottom: 16px;">
              <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #a78bfa; letter-spacing: 0.05em;">Sender Email</span>
              <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #38bdf8;">
                <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            ${subject ? `
            <div style="margin-bottom: 16px;">
              <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #a78bfa; letter-spacing: 0.05em;">Subject</span>
              <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #ffffff;">${subject}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 24px;">
              <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #a78bfa; letter-spacing: 0.05em;">Message</span>
              <div style="margin-top: 8px; padding: 18px; background: #0f172a; border-left: 4px solid #8b5cf6; border-radius: 8px; color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #334155; margin: 28px 0 16px 0;" />
            <p style="font-size: 12px; color: #64748b; text-align: center; margin: 0;">Portfolio Direct SMTP Mailer • Delivered to ${toEmail}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully via SMTP!' });

  } catch (err) {
    console.error('SMTP Email Error:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email via SMTP server.' });
  }
}
