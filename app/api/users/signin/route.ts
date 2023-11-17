import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import * as bcryptjs from "bcryptjs";
import { usersCollection } from "@/app/api/mongodb";
import jwt from "jsonwebtoken";
require('dotenv').config();


connect();

export async function POST(request: NextRequest) {

  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    const user = await usersCollection.findRecord({ email });
    if (!user) {
      return NextResponse.json({ error: "User does Exist" }, { status: 400 });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      phone: user.phone,
      email: user.email,
      password: user.password,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "LoggedIn Successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
