import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    if (!payload?.email || !payload?.password || !payload?.name) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const { data } = await axios.post(
      `${process.env.NEXTAUTH_URL}/users/signup`,
      payload
    );

    const user = {
      ...data?.data?.user,
      accessToken: data?.data?.accessToken,
      refreshToken: data?.data?.refreshToken,
    };

    const serialized = serialize("ECHI_AUTH", JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return NextResponse.json(user, {
      status: 200,
      headers: { "Set-Cookie": serialized },
    });
  } catch (e) {
    const error = e as AxiosError;
    return NextResponse.json({
      message: "An error occurred",
      error: error,
    });
  }
}
