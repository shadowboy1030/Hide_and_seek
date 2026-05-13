import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { bookingInquirySchema } from "@/lib/schemas/booking";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingInquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 },
      );
    }
    const inquiry = await prisma.bookingInquiry.create({
      data: parsed.data,
    });
    return NextResponse.json({ ok: true, id: inquiry.id }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Could not save your request." },
      { status: 500 },
    );
  }
}
