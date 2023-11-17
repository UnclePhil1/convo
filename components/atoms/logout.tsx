"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Logout: React.FC = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      router.push("/auth/signin");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="float-right">
      <button onClick={logout} className="text-red-500 hover:text-primary py-2 px-6 rounded-md text-[18px] font-semibold">
        Logout
      </button>
    </div>
  );
};

export default Logout;
