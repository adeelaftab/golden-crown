import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const data = await resend.emails.send({
      from: 'Golden Crown Design <onboarding@resend.dev>', // This will be replaced with your verified domain
      to: ['info@goldencrowndb.com'],
      subject: `New Estimate Request${serviceTitle ? ` - ${serviceTitle}` : ''}`,
      html: emailContent,
      // Also send a plain text version
      text: `New Estimate Request${serviceTitle ? ` - ${serviceTitle}` : ''}\n\n${Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')}`,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
