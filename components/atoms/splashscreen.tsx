"use client";
import React from "react";
import Image from "next/image";
import SplashImg from "@/../../public/images/logo.png";
import SpinnerComponent from "./spinner";

const SplashScreen: React.FC = () => {
  return (
    <div>
      <div className="w-[100%] h-[100vh] bg-primary overflow-hidden flex flex-col justify-center items-center relative">
        <Image
          src={SplashImg}
          alt="SplashImg.png"
          width={700}
          height={300}
          className="w-[250px] h-[250px]"
        />
        <div className="absolute top-[56%]">
        <SpinnerComponent />
        </div>
      </div>
    </div>
  );
};


export default SplashScreen;