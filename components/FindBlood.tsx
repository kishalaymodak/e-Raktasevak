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
  IconPhone,
} from "@tabler/icons-react";
import { user, UserRegistration } from "@/action/user";
import { newDonner } from "@/action/newDonor";
import { findDonor } from "@/action/findDonor";
import { Blood, findBloodBank } from "@/action/findBloodBank";

export interface blood {
  bloodtype: string;
  author: {
    city: string;
    state: string;
    name: string;
    loclity: string;
    pincode: string;
    phone: string;
  };
}

export default function FindBlood() {
  const route = useRouter();
  const [bloodgroup, setBlood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [data, setData] = useState<Blood[]>([]);

  return (
    <div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
          Find Blood Bank
        </h2>
        <p className="text-neutral-600 text-sm md:text-xl max-w-sm mt-2 dark:text-neutral-300">
          Enter your requre blood type, your city, your state to find the
          nearest Blood Bank.
        </p>

        <div className="flex justify-center items-center mt-4 gap-4 mb-4">
          <LabelInputContainer>
            <Label htmlFor="blood">Blood Type</Label>
            <Input
              onChange={(e) => {
                setBlood(e.target.value);
              }}
              id="blood"
              placeholder="AB+"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="city">City</Label>
            <Input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              id="city"
              placeholder="kolkata"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="state">State</Label>
            <Input
              onChange={(e) => {
                setState(e.target.value);
              }}
              id="state"
              placeholder="West bengal"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          onClick={async () => {
            let bloodtype = bloodgroup.toUpperCase();
            bloodtype = bloodtype.replace(/\s*$/, "");
            const UserData = await findBloodBank(
              bloodtype,
              city.replace(/\s*$/, ""),
              state.replace(/\s*$/, "")
            );

            setData(UserData);
          }}
        >
          Find Blood Bank &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </div>

      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Hospital name
                </th>
                <th scope="col" className="px-6 py-3">
                  Hospital Ph-no.
                </th>
                <th scope="col" className="px-6 py-3">
                  Nuber Of Bottles
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
                <th scope="col" className="px-6 py-3">
                  PIN no.
                </th>
              </tr>
            </thead>

            {data.map((data) => (
              <TableBody
                key={data.id}
                name={data.name}
                bloodgroup={data.bloods}
                locality={data.loclity}
                phone={data.phone}
                pincode={data.pincode}
                city={data.city}
                state={data.state}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

interface bloodTable {
  key: string;
  name: string;
  phone: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  bloodgroup: {
    id: string;
    bloodtype: string;
    bottleid: string;
    dob: string;
    exp: string;
    used: boolean;
    authorId: string;
  }[];
}

const TableBody = ({
  key,
  name,
  phone,
  locality,
  city,
  state,
  pincode,
  bloodgroup,
}: bloodTable) => {
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {name}
        </th>
        <td className="px-6 py-4">{phone}</td>
        <td className="px-6 py-4 text-center">{bloodgroup.length}</td>
        <td className="px-6 py-4">{locality}</td>
        <td className="px-6 py-4">{city}</td>
        <td className="px-6 py-4">{state}</td>
        <td className="px-6 py-4">{pincode}</td>
      </tr>
    </tbody>
  );
};

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
