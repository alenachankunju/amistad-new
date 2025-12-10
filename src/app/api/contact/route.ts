import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Initialize Resend only when needed (at request time, not build time)
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact the administrator.' },
      { status: 500 }
    );
  }
  
  const resend = new Resend(apiKey);
  try {
    const body = await request.json();
    const { firstName, lastName, email, service, message, subscribeToNewsletter } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get the recipient email from environment variable or use default
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL || 'sales@amistadgeneral.net';

    // Get the sender email from environment variable or use default
    // For development: use 'onboarding@resend.dev' (works without verification)
    // For production: use your verified domain email (e.g., 'noreply@amistadgeneral.net')
    const senderEmail = process.env.RESEND_FROM_EMAIL || 'Contact Form <onboarding@resend.dev>';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `Contact Form Submission: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 10px;">
            Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Service Required:</strong> ${service}</p>
            ${subscribeToNewsletter ? '<p><strong>Newsletter:</strong> Subscribed</p>' : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #0f766e; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Project Details</h3>
            <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
            <p>This email was sent from the Amistad Contracting and Services contact form.</p>
            <p>You can reply directly to this email to respond to ${firstName} ${lastName}.</p>
          </div>
        </div>
      `,
      text: `
Contact Form Submission

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Service Required: ${service}
${subscribeToNewsletter ? '- Newsletter: Subscribed' : ''}

Project Details:
${message}

---
This email was sent from the Amistad Contracting and Services contact form.
You can reply directly to this email to respond to ${firstName} ${lastName}.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        id: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

