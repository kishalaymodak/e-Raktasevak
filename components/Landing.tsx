"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { useRouter } from "next/navigation";

export default function VortexDemoSecond() {
  const route = useRouter();
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Welcome to e-Raktakosh
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          You one stop solution to Find Blood
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button
            onClick={() => {
              route.push("/find/blood");
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            Find Blood
          </button>
          <button
            onClick={() => {
              route.push("/find/donor");
            }}
            className="px-4 py-2  text-white "
          >
            Find Donor
          </button>
        </div>
      </Vortex>
    </div>
  );
}
