'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SpinnerImg from "@/../../public/images/spinner.svg";


const SpinnerComponent:React.FC = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
      window.location.href = '/auth/signin';
    }, 4000);
  }, []);

  if (showSpinner) {
    return (
      <div className="spinner">
        <Image
          src={SpinnerImg}
          alt="SpinnerImg.png"
          width={700}
          height={300}
          className="w-[100px] h-[100px]"
        />
      </div>
    );
  } else {
    return null;
  }
};

export default SpinnerComponent;
