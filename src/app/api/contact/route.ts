import { NextResponse } from "next/server";
import { contactFormSchema } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // TODO: Integrate email sending service (e.g., Resend, SendGrid, Nodemailer)
    // Ensure the following environment variables are set:
    // - SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS
    // - CONTACT_EMAIL_TO (recipient for contact form submissions)

    // For now, log the submission (remove in production)
    console.log("Contact form submission:", result.data);

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll be in touch within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 }
    );
  }
}
