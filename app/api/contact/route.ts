import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Moonbyte Contact <onboarding@resend.dev>",
      // ⚠️ غيّر هذا إلى بريدك الإلكتروني (نفس البريد الذي سجلت به في Resend)
      to: ["areejoukal@gmail.com"],
      replyTo: email,
      subject: `رسالة جديدة من ${name} (نموذج الاتصال)`,
      html: `
        <h2>رسالة جديدة من موقع Moonbyte</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>الهاتف:</strong> ${phone || "غير مقدم"}</p>
        <p><strong>نوع المشروع:</strong> ${projectType || "غير مقدم"}</p>
        <hr />
        <p><strong>محتوى الرسالة:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}