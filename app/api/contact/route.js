import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getPool } from '../../../lib/db';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('form-message')?.trim();
    const honeypot = formData.get('website')?.trim();
    const formLoadedAt = parseInt(formData.get('form_loaded_at') || '0');

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ response: 'error', Message: 'Spam detected.' });
    }

    // Time check (5 seconds minimum)
    const now = Math.floor(Date.now() / 1000);
    if (formLoadedAt > 0 && now - formLoadedAt < 5) {
      return NextResponse.json({ response: 'error', Message: 'Too fast submission.' });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ response: 'error', Message: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ response: 'error', Message: 'Invalid email address.' });
    }

    // Spam keyword filter
    const spamKeywords = ['viagra', 'casino', 'crypto', 'loan'];
    for (const word of spamKeywords) {
      if (message.toLowerCase().includes(word)) {
        return NextResponse.json({ response: 'error', Message: 'Spam content detected.' });
      }
    }

    // Get client IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0';

    // Database operations
    const pool = getPool();

    // Rate limit — 3 requests per 10 minutes per IP
    const [rows] = await pool.execute(
      'SELECT COUNT(*) as count FROM contact_messages WHERE ip_address = ? AND created_at >= (NOW() - INTERVAL 10 MINUTE)',
      [ip]
    );

    if (rows[0].count >= 3) {
      return NextResponse.json({ response: 'error', Message: 'Too many requests. Try again later.' });
    }

    // Insert into database
    await pool.execute(
      'INSERT INTO contact_messages (name, email, message, ip_address) VALUES (?, ?, ?, ?)',
      [name, email, message, ip]
    );

    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: 'New Contact Message',
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ response: 'success', Message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ response: 'error', Message: 'Failed to send message. Please try again.' });
  }
}