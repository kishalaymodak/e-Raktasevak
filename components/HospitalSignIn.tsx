"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { UserRegistration } from "@/action/user";
import { newDonner } from "@/action/newDonor";
import { HospitalRegistration } from "@/action/hospitalRegistration";
import { hospitalSignIn } from "@/action/hospitalSiignIn";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function HospitalSignIn() {
  const route = useRouter();
  const [password, setPassword] = useState("");
  const [hospitalId, setHospitalId] = useState("");

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Sign In
      </h2>
      <p className="text-neutral-600 text-sm md:text-xl max-w-sm mt-2 dark:text-neutral-300">
        If you Don&apos;t Have a account then
        <Link className=" underline " href={"/hospital/signup"}>
          Sign Up
        </Link>
      </p>

      <div className="flex flex-col space-y-2 mt-4 mb-4">
        <LabelInputContainer>
          <Label htmlFor="hospitalId">Hospital Registration Id</Label>
          <Input
            onChange={(e) => {
              setHospitalId(e.target.value);
            }}
            id="hospitalId"
            placeholder="234535"
            type="number"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="Password">Password</Label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="Password"
            placeholder="*******"
            type="password"
          />
        </LabelInputContainer>
      </div>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        onClick={async () => {
          const res = await signIn("credentials", {
            HospitalID: hospitalId,
            password: password,
            redirect: false,
          });
          console.log(res);

          if (!res?.error) {
            route.push(`/hospital/home/`);
          } else {
            route.push("/hospital/signup");
          }
        }}
      >
        Check &rarr;
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
