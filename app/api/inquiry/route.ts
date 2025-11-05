import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, selectedLodge, datesOfInterest, message } = body;

    // Validate required fields
    if (!fullName || !email || !selectedLodge || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to sales team
    // 3. Send confirmation email to customer
    // 4. Integrate with booking system
    
    console.log("Lodge inquiry submission:", {
      fullName,
      email,
      selectedLodge,
      datesOfInterest,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending
    // await sendEmail({
    //   to: "bookings@wildernessbotswana.com",
    //   subject: `New Lodge Inquiry: ${selectedLodge}`,
    //   body: `
    //     Name: ${fullName}
    //     Email: ${email}
    //     Lodge: ${selectedLodge}
    //     Dates: ${datesOfInterest || "Flexible"}
    //     Message: ${message}
    //   `
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry! We'll contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry form error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
