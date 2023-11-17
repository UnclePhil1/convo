import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import * as bcryptjs from 'bcryptjs';
require('dotenv').config();
import { usersCollection } from "@/app/api/mongodb";
import { ObjectId } from "mongodb";


connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, phone, password } = reqBody;
    console.log(reqBody);

    const user = await usersCollection.findRecord({ email });

    if (user) {
      return NextResponse.json({ error: "User Already Exist" }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);


    const id = await usersCollection.createRecord({
      username,
      email,
      phone,
      password: hashedPassword
    });

    const savedUser = await usersCollection.findRecord({_id: new ObjectId(id)});

    console.log(savedUser);

    return NextResponse.json({
      message: "User Created Successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
