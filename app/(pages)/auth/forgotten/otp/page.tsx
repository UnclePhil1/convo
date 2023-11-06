"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@/components/style.css";
import Button from "@/components/atoms/button";

const Otp: React.FC = () => {
  return (
    <div className="forget w-[100%] h-[100vh] flex justify-center items-center my-0 mx-auto">
      <form
        action=""
        className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md border border-slate-50 mx-2"
      >
        <h1 className="text-[20px] font-semibold">Enter OTP</h1>
        <p className="text-primary">An OTP has been sent</p>
        <h1 className="text-[20px] pt-4">Input OTP To Proceed</h1>
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-[250px] md:w-[350px] mt-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
        />
        <Button text="Reset" />
      </form>
    </div>
  );
};

export default Otp;
