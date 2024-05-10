"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { UserRegistration } from "@/action/user";
import { HospitalRegistration } from "@/action/hospitalRegistration";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
export default function HospitalSignup() {
  const route = useRouter();
  const [name, setname] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [phone, setphone] = useState("");
  const [loclity, setlocality] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Sign-Up and Register You Hospital
      </h2>
      <p className="text-neutral-600 text-sm md:text-xl max-w-sm mt-2 dark:text-neutral-300">
        Provide us the valid credential and create account .If you already have
        an account then{" "}
        <span
          className=" underline cursor-pointer"
          onClick={() => {
            signIn();
          }}
        >
          Sign-In
        </span>
      </p>

      <div className="flex flex-col space-y-2 mt-4 mb-4">
        <LabelInputContainer>
          <Label htmlFor="Hospital Name">Hospital Name</Label>
          <Input
            onChange={(e) => {
              setname(e.target.value);
            }}
            id="Hospital Name"
            placeholder="Kolkata Medical Collage"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="HospitalId">Hospital Registration Id</Label>
          <Input
            onChange={(e) => {
              setHospitalId(e.target.value);
            }}
            id="HospitalId"
            placeholder="127374"
            type="number"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="Phone">Hospital Phone No.</Label>
          <Input
            onChange={(e) => {
              setphone(e.target.value);
            }}
            id="Phone"
            placeholder="1234567890"
            type="number"
            maxLength={10}
          />
        </LabelInputContainer>
      </div>
      <div>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 mb-4 dark:text-neutral-300">
          Address
        </p>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="locality">Location </Label>
          <Input
            onChange={(e) => {
              setlocality(e.target.value);
            }}
            id="locality"
            placeholder="Area name"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="city">City</Label>
          <Input
            onChange={(e) => {
              setcity(e.target.value);
            }}
            id="city"
            placeholder="Kolkata"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="state">State</Label>
          <Input
            onChange={(e) => {
              setstate(e.target.value);
            }}
            id="state"
            placeholder="West Bengal"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="pin">Pin No </Label>
          <Input
            onChange={(e) => {
              setpin(e.target.value);
            }}
            id="pin"
            placeholder="123456"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className=" mb-4">
          <Label htmlFor="Password">Password</Label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="Password"
            placeholder="********"
            type="password"
          />
        </LabelInputContainer>
      </div>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        onClick={async () => {
          const res = await HospitalRegistration({
            name,
            loclity,
            city,
            state,
            hospitalId,
            password,
            phone,
            pincode,
          });
          route.push(`/hospital/signin`);
        }}
      >
        Registration &rarr;
        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
