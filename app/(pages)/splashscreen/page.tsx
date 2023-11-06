"use client";
import React from "react";
import SplashScreen from "@/components/atoms/splashscreen";

const SplashScreenPage: React.FC = () => {
  return (
    <div>
      <div className="w-[100%] h-[100vh] bg-primary overflow-hidden">
       <SplashScreen />
      </div>
    </div>
  );
};

export default SplashScreenPage;
