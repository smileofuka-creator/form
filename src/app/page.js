"use client";
import { useState } from "react";
import Image from "next/image";
import Name from "./components/Input";
import Link from "next/link";

export default function Home() {
  const [currentStep, setCurrentStep] = useState({
    firstName: "",
    lastName: "",
    username: "",
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
            <Name title="First name" />
            <Name title="Last name" />
            <Name title="Username" />
          </div>
        </div>
        <div className="mt-auto ">
          <button className="w-full bg-[#202020] text-white py-4 rounded-[8px] font-medium hover:bg-black transition-colors">
            Continue <span>1</span>/3
            <Image src="/Vector.png" width={7.5} height={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
