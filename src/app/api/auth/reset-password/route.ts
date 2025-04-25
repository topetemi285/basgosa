import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const payload = await req.json();
    console.log(payload);

    const email = req.nextUrl.searchParams.get("email");
    const token = req.nextUrl.searchParams.get("token");

    const { data } = await axios.patch(
      `${process.env.NEXTAUTH_URL}/users/reset-password?email=${email}&token=${token}}`,
      payload
    );

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    const error = e as AxiosError;

    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 400 }
    );
  }
}
