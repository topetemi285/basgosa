import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token");

    const { data } = await axios.get(
      `${process.env.NEXTAUTH_URL}/users/verify-otp?token=${token}`
    );
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    const error = e as AxiosError;

    return NextResponse.json(
      {
        message: "An error occurred",
        error: error,
      },
      { status: 400 }
    );
  }
}
