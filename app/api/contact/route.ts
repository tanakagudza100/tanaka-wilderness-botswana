import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, camp, fullName, email, phone, message } = body;

    // Validate required fields
    if (!topic || !fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    
    // For now, we'll just log and return success
    console.log("Contact form submission:", {
      topic,
      camp,
      fullName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (in production, use a service like SendGrid, AWS SES, etc.)
    // await sendEmail({
    //   to: "info@wildernessbotswana.com",
    //   subject: `New Contact Form: ${topic}`,
    //   body: `
    //     Name: ${fullName}
    //     Email: ${email}
    //     Phone: ${phone || "N/A"}
    //     Camp: ${camp || "N/A"}
    //     Topic: ${topic}
    //     Message: ${message}
    //   `
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
