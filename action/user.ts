"use server";

import client from "@/db";

export interface user {
  id?: string;
  name: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  age: string;
  bloodgroup: string;
  phone: string;
}

export async function UserRegistration({
  name,
  locality,
  city,
  state,
  pincode,
  age,
  bloodgroup,
  phone,
}: user) {
  // should add zod validation here
  const cityUpper = city.toUpperCase();
  const loclityUpper = locality.toUpperCase();
  const stateUpper = state.toUpperCase();
  const bloodgroupUpper = bloodgroup.toUpperCase();
  const user = await client.user.create({
    data: {
      name,
      locality: loclityUpper,
      city: cityUpper,
      state: stateUpper,
      pincode,
      age,
      bloodgroup: bloodgroupUpper,
      phone,
    },
  });

  return true;
}
