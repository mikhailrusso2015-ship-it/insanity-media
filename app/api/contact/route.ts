import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Server-side validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real application, you would integrate with a service like SendGrid, Resend, or Nodemailer here,
    // using environment variables for the API keys.
    // Example:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Lead: ${data.service}`,
    //   body: `From: ${data.name} <${data.email}>\n\nMetrics: ${data.message}`
    // });
    
    console.log("Mock API Request Received:", data);

    // Simulate reliable API response delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
    
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
