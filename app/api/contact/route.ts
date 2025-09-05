import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Cek apakah email sudah dikonfigurasi
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your_16_character_app_password') {
      return NextResponse.json(
        { error: 'Email belum dikonfigurasi' },
        { status: 500 }
      );
    }

    // Konfigurasi transporter untuk Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Template email sederhana
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'govandwi01@gmail.com',
      subject: `[PORTFOLIO] Pesan dari ${name}`,
      html: `
        <h3>Pesan Baru dari Portfolio Website</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Dikirim pada: ${new Date().toLocaleString('id-ID')}</em></p>
      `,
      replyTo: email,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email berhasil dikirim' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Gagal mengirim email. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}