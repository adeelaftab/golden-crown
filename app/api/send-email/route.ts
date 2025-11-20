import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'goldencrowndb@gmail.com',
    pass: 'ilvvzuvulvclocda',
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formData, serviceTitle } = body;

    // Build email content from form data
    const formFields = Object.entries(formData)
      .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
      .join('<br/>');

    const emailContent = `
      <h2>New Estimate Request${serviceTitle ? ` - ${serviceTitle}` : ''}</h2>
      <p>You have received a new estimate request with the following details:</p>
      <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
        ${formFields}
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        This email was sent from the Golden Crown Design and Build website estimate form.
      </p>
    `;

    console.log('Sending email from: goldencrowndb@gmail.com');

    const info = await transporter.sendMail({
      from: 'Golden Crown Design <goldencrowndb@gmail.com>',
      to: 'info@goldencrowndb.com,',
      subject: `New Estimate Request${serviceTitle ? ` - ${serviceTitle}` : ''}`,
      html: emailContent,
      text: `New Estimate Request${serviceTitle ? ` - ${serviceTitle}` : ''}\n\n${Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')}`,
    });

    return NextResponse.json({ success: true, data: info }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
