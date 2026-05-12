"use client";
import { useState } from "react";
import Image from "next/image";

import Check from "./Check";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="flex min-h-screen w-full border  bg-[#F4F4F4] items-center justify-center">
      <div className="bg-[#FFFFFF] w-[480px] h-[655px] rounded-[8px] shadow-md flex flex-col p-6">
        <div>
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="mb-4"
            />
            <h2 className="text-black text-2xl">Join Us! 😎</h2>
            <p className="text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Check title="Email" />
            <Check title="Phone number" />
            <Check title="Password" />
            <Check title="Confirm password" />
          </div>
        </div>
        <div className="mt-auto">
          {/* <link href="/"> */}
          <button className="w-full bg-[#202020] text-white py-4 rounded-[8px] font-medium hover:bg-black transition-colors">
            Continue 2/3
          </button>
          {/* </link> */}
        </div>
      </div>
    </div>
  );
}
