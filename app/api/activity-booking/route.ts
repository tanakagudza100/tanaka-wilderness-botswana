import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      activityName,
      fullName,
      email,
      numberOfPeople,
      activityDate,
      bookingType,
      additionalNotes,
    } = body;

    // Validate required fields
    if (
      !activityName ||
      !fullName ||
      !email ||
      !numberOfPeople ||
      !activityDate ||
      !bookingType
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Check availability
    // 3. Send confirmation email
    // 4. Send notification to activity coordinator
    // 5. Create booking record
    
    console.log("Activity booking submission:", {
      activityName,
      fullName,
      email,
      numberOfPeople,
      activityDate,
      bookingType,
      additionalNotes,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending
    // await sendEmail({
    //   to: email,
    //   subject: `Activity Booking Confirmation: ${activityName}`,
    //   body: `
    //     Dear ${fullName},
    //     
    //     Thank you for booking ${activityName}!
    //     
    //     Details:
    //     - Activity: ${activityName}
    //     - Date: ${activityDate}
    //     - Number of People: ${numberOfPeople}
    //     - Booking Type: ${bookingType}
    //     
    //     We'll contact you soon to confirm your booking.
    //     
    //     Best regards,
    //     Wilderness Botswana Team
    //   `
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Your booking request has been received. We'll contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Activity booking error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
