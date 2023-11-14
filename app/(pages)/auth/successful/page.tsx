"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Success from '@/../../public/images/welcome.svg';

const ChooseMethod: React.FC = () => {
  return (
    <div className="forget w-[100%] h-[100vh] flex flex-col justify-center items-center my-0 mx-auto p-4">
      <Image
        src={Success}
        alt="success.png"
        width={700}
        height={300}
        className="md:w-[400px] md:h-[400px] block"
      />
      <Link
        href={"/profile"}
        className="text-green-600 border-2 border-green-600 hover:bg-green-100 text-[18px] py-2 px-6 rounded-md top-10 left-10 mt-10"
      >
        Let's Chat
      </Link>
    </div>
  );
};

export default ChooseMethod;
