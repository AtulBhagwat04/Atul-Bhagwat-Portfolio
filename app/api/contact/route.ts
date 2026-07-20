import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    console.log("Received Contact Submission:", validated);

    // If an external backend URL is configured in env, forward to it
    const backendUrl = process.env.EXPRESS_BACKEND_URL;
    if (backendUrl) {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    // Default response when running standalone
    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully! Atul Bhagwat will get back to you soon.",
        data: {
          name: validated.name,
          email: validated.email,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
