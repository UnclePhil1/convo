"use client";
import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Profile:React.FC = () => {
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
    <div>
      <h1>Profile Page</h1>

      <button
        onClick={logout}
        className="text-white bg-primary py-2 px-6 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
