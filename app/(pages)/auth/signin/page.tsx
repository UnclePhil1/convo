"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../../public/images/convo.png";
import SignInImg from "@/../../public/images/signin.svg";
import "@/../../components/style.css";
import Button from "@/components/atoms/button";
import Link from "next/link";
import axios from 'axios';

const Signin: React.FC = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async () => {

  }

  return (
    <div>
      <div className="w-[100%] h-[100vh] relative signinbg grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-4 px-[5%]">
        <Image
          src={SignInImg}
          alt="signin.png"
          width={700}
          height={300}
          className="w-[400px] h-[400px] hidden lg:block"
        />
        <div className="bgWave">
          <Image
            src={Logo}
            alt="signin.png"
            width={700}
            height={300}
            className="w-[250px] h-[250px]"
          />
          <form action="" className="flex flex-col justify-center items-center">
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Your Email"
              className="w-[250px] md:w-[350px] my-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
            />
            <input
              name="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Your Password"
              className="w-[250px] md:w-[350px] mt-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
            />
            <Link
              href={"/auth/forgotten/method"}
              className="text-primary text-[12px] text-end self-end"
            >
              Forget Password?
            </Link>
            <Button text="SignIn" onClick={handleSignin}/>
            <span className="flex justify-center items-center">
              <p className="font-semibold">Do not have an Account?</p>
              <Link
                href={"/auth/signup"}
                className="text-primary font-semibold pl-1"
              >
                SignUp
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
