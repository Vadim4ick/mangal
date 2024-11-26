import { createPayment } from "@/shared/lib/create-payment";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const paymentData = await createPayment({
      description: body.description,
      amount: body.amount,
      metadata: body.metadata,
    });

    return NextResponse.json({ result: paymentData });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
