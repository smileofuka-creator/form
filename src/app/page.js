"use client";
import { useState } from "react";
import Image from "next/image";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = [StepOne, StepTwo, StepThree][currentStep];
  const [data, setData] = useState("");

  const handleInputValue = (inputValue, key) => {
    setData({ ...data, [key]: inputValue  });
  };

  console.log(data);
  // const handleOnClick = () => setCurrentStep(currentStep + 1); back nemehees umnuh zagvar

  const totalSteps = 4;

  const handleOnClick = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleOnBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

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
            <h2 className="text-black text-2xl">Join Us! 😎 </h2>
            <p className="text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <StepComponent handleInputValue={handleInputValue} />
          </div>
        </div>

        {/* <div className="flex flex-col gap-2">
          <StepComponent last={last} />
        </div> */}

        <div className="mt-auto flex gap-2">
          {currentStep > 0 && (
            <button
              onClick={handleOnBack}
              className="w-1/3 border border-[#202020] text-[#202020] py-4 rounded-[8px] font-medium hover:bg-[#F4F4F4] transition-colors"
            >
              ← Back
            </button>
          )}

          <button
            onClick={handleOnClick}
            className="flex-1 bg-[#202020] text-white py-4 rounded-[8px] font-medium hover:bg-black transition-colors flex items-center justify-center gap-2"
          >
            Continue {currentStep + 1}/{totalSteps}
            <Image src="/Vector.png" width={7.5} height={12} alt="arrow" />
          </button>
        </div>

        {/* 
        <div className="mt-auto ">
          <button
            onClick={handleOnClick}
            className="w-full bg-[#202020] text-white py-4 rounded-[8px] font-medium hover:bg-black transition-colors"
          >
            Continue <span>1</span>/3
            <Image src="/Vector.png" width={7.5} height={12} />
          </button>
        </div> */}
      </div>
    </div>
  );
}
