"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@/components/style.css";
import Button from "@/components/atoms/button";
import Link from "next/link";

const ChooseMethod: React.FC = () => {
 const [getByNumber, setGetByNumber] = useState(false)
 const [getByEmail, setGetByEmail] = useState(true)

 const handleGetByNumber = () => {
  setGetByNumber(!false)
  setGetByNumber(false)
 }


  return (
    <div className="forget w-[100%] h-[100vh] flex justify-center items-center my-0 mx-auto">

      <Link href={'/auth/signin'} className="text-white bg-primary p-3 px-6 rounded-md absolute top-10 left-10">Go Back</Link>
 
      {getByEmail && <form
          action=""
          className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md border border-slate-50 mx-2"
        >
          <h1 className="text-[20px]">Enter your Registered E-Mail.</h1>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-[250px] md:w-[350px] mt-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
          />
           <Link href={"/auth/forgotten/otp"}>
            <Button text="Get Code" />
          </Link>
          <button
            className="text-primary text-[13px] text-end self-end"
            onClick={handleGetByNumber}
          >
            Use Phone Number
          </button>
        </form>}
 
        {getByNumber && <form
          action=""
          className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md border border-slate-50 mx-2"
        >
          <h1 className="text-[20px]">Enter your Registered Number.</h1>
          <input
            name="number"
            type="number"
            placeholder="Your Phone Number"
            className="w-[250px] md:w-[350px] my-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
          />
          <Link href={"/auth/forgotten/otp"}>
            <Button text="Get Code" />
          </Link>
          <button
            className="text-primary text-[13px] text-end self-end"
          >
            Use Email
          </button>
        </form>}
    </div>
  );
};

export default ChooseMethod;
