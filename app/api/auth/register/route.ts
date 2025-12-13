import { generateToken, hashPassword } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, email, firstName, lastName, password } =
      await request.json();
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Username, email & password are required or not valid" },
        { status: 400 },
      );
    }

    const emailExists = await prisma.user.findUnique({ where: { email } });
    if (emailExists) {
      return NextResponse.json(
        { error: "User with this email already exists}" },
        { status: 409 },
      );
    }

    const usernameExists = await prisma.user.findUnique({
      where: { username },
    });
    if (usernameExists) {
      return NextResponse.json(
        { error: "User with this username already exists}" },
        { status: 409 },
      );
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        firstName,
        lastName,
        password: hashedPassword,
      },
    });

    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });

    // set cookie
    const token = generateToken(user.id);
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // days
    });

    return response;
  } catch (e) {
    console.error("Registration failed:", e);
    return NextResponse.json(
      { error: "Internal server error. Something went wrong" },
      { status: 500 },
    );
  }
}
