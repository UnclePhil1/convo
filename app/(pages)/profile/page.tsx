"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Profile: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState(null); // Change initial state to null
  const [loading, setLoading] = useState(true);
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

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/users/meUser");
      setData(res.data.data._id);
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/users/meUser");
      setData(res.data.data._id);
    } catch (error:any) {
      console.error("Axios request failed:", error);
      toast.error("Failed to fetch user details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <h2 className="p-4">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
      )}
      <h2 className="p-1 rounded bg-green-500">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="text-white bg-primary py-2 px-6 rounded-md"
      >
        Logout
      </button>
      <button
        onClick={getUser}
        className="text-white bg-green-700 py-2 px-6 rounded-md"
      >
        GetUserDetails
      </button>
    </div>
  );
};

export default Profile;
