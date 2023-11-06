"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@/components/style.css";
import Button from "@/components/atoms/button";
import Link from "next/link";

const ChooseMethod: React.FC = () => {
  const [currentForm, setCurrentForm] = useState("email"); // State variable to track the current form

  const handleUsePhoneNumberClick = () => {
    setCurrentForm("phone"); // Update the current form to "phone"
  };

  const handleUseEmailClick = () => {
    setCurrentForm("email"); // Update the current form to "email"
  };

  return (
    <div className="forget w-[100%] h-[100vh] flex justify-center items-center my-0 mx-auto">
      {currentForm === "phone" ? ( // Conditional rendering based on the current form
        <form
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
          <button
            className="text-primary text-[13px] text-end self-end"
            onClick={handleUsePhoneNumberClick}
          >
            Use Phone Number
          </button>
        </form>
      ) : (
        <form
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
            onClick={handleUseEmailClick}
          >
            Use Email
          </button>
        </form>
      )}
    </div>
  );
};

export default ChooseMethod;
