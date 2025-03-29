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
import { useParams, useRouter } from "next/navigation";

export default function DonerForm() {
  const route = useRouter();
  const param = useParams();
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");
  const [locality, setlocality] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpin] = useState("");
  const [bloodgroup, setblood] = useState("");

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Donor Registretion
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Register blood doner to help pepole
      </p>

      <div className="flex flex-col space-y-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="Donor Name">Donor Name</Label>
          <Input
            onChange={(e) => {
              setname(e.target.value);
            }}
            id="Donor Name"
            placeholder="Tyler"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="age">Donor Age</Label>
          <Input
            onChange={(e) => {
              setage(e.target.value);
            }}
            id="age"
            placeholder="35"
            type="number"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="Phone">Phone No.</Label>
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

        <LabelInputContainer>
          <Label htmlFor="blood">Blood Group</Label>
          <Input
            onChange={(e) => {
              setblood(e.target.value);
            }}
            id="blood"
            placeholder="AB+"
            type="text"
            maxLength={10}
          />
        </LabelInputContainer>
      </div>
      <div>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 mb-4 dark:text-neutral-300">
          Address
        </p>
        <LabelInputContainer className="mb-4  ">
          <Label htmlFor="locality"> Locality </Label>
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
      </div>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        onClick={async () => {
          await UserRegistration({
            name,
            locality,
            city,
            state,
            age,
            bloodgroup,
            phone,
            pincode,
          });
          route.push(`/hospital/home/newblood`);
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
