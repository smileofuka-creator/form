import { useState } from "react";
import Image from "next/image";
import Name from "./Components/Name";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  const [errors, setErrors] = useState({
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
        <div className="mt-auto">
          <button className="w-full bg-[#202020] text-white py-4 rounded-[8px] font-medium hover:bg-black transition-colors">
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
}
