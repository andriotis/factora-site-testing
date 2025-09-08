import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, role, to } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if SendGrid API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SendGrid API key is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailContent = `
New Early Access Request

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Role: ${role || "Not provided"}

---
This request was sent from the early access form on your website.
    `.trim();

    // Create HTML version of the email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2F9A8A; border-bottom: 2px solid #2F9A8A; padding-bottom: 10px;">
          New Early Access Request
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Role:</strong> ${role || "Not provided"}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Request Details:</h3>
          <div style="background-color: #fff; padding: 15px; border-left: 4px solid #2F9A8A; border-radius: 4px;">
            This person has requested early access to the platform.
          </div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          This request was sent from the early access form on your website.
        </p>
      </div>
    `;

    // Send email using SendGrid
    const msg = {
      to: to || "info@factora.eu",
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@yourdomain.com", // Use verified sender
      subject: `Early Access Request: ${name}`,
      text: emailContent,
      html: htmlContent,
    };

    await sgMail.send(msg);

    console.log("Early access form email sent successfully:", {
      to: msg.to,
      from: msg.from,
      subject: msg.subject,
    });

    // Return success response
    return NextResponse.json(
      { message: "Early access request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing early access form:", error);

    // Handle SendGrid specific errors
    if (error instanceof Error && error.message.includes("SendGrid")) {
      return NextResponse.json(
        { error: "Email service error. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
