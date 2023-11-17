"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/../../public/images/convo.png";
import SignInImg from "@/../../public/images/signup.svg";
import "@/../../components/style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Signup: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSignUp = async () => {
    try {
      setLoading(true); // Set loading to true to indicate the ongoing request
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp Successful", response.data);
      toast.success("Sign up successful!");
        router.push("/auth/signin");
    } catch (error: any) {
      toast.error(error.message);
      console.log("Not signup", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div>
      <div className="w-[100%] h-auto lg:h-[100%] relative signupbg grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-4 px-[5%]">
        <Image
          src={SignInImg}
          alt="signin.png"
          width={700}
          height={300}
          className="w-[400px] h-[400px] hidden lg:block"
        />
        <div className="bgWave">
          <Image
            src={Logo}
            alt="signin.png"
            width={700}
            height={300}
            className="w-[200px] h-[200px]"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[1.5em] font-medium">
              {loading ? "Processing" : "SignUp"}
            </h1>
            <input
              name="username"
              type="text"
              placeholder="Your Name"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-[250px] md:w-[350px] my-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
            />
            <input
              name="number"
              type="number"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder="Your Phone Number"
              className="w-[250px] md:w-[350px] my-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
            />
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Your Email"
              className="w-[250px] md:w-[350px] my-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
            />
            <input
              name="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Your Password"
              className="w-[250px] md:w-[350px] mt-2 py-2 px-4 border rounded-md border-blue-100 focus:outline-primary"
            />
            <button
              type="submit"
              onClick={onSignUp}
              className="w-[200px] md:w-[350px] my-4 py-2 px-4 border rounded-md bg-primary text-white"
            >
              {buttonDisabled ? "Not SignedIn" : "SignUp"}
            </button>
            <span className="flex justify-center items-center">
              <p className="font-semibold">Have an Account?</p>
              <Link
                href={"/auth/signin"}
                className="text-primary font-semibold pl-1"
              >
                SignIn
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
