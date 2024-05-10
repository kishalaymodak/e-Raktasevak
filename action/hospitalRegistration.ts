"use server";

import client from "@/db";

export interface hospital {
  id?: string;
  name: string;
  loclity: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  password: string;
  hospitalId: string;
}

export async function HospitalRegistration({
  name,
  loclity,
  city,
  state,
  pincode,
  hospitalId,
  password,
  phone,
}: hospital) {
  // should add zod validation here
  const nameUpper = name.toUpperCase();
  const cityUpper = city.toUpperCase();
  const stateUpper = state.toUpperCase();
  const loclityUpper = loclity.toUpperCase();

  const hospital = await client.hospital.create({
    data: {
      name: nameUpper,
      loclity: loclityUpper,
      city: cityUpper,
      state: stateUpper,
      pincode,
      hospitalId,
      password,
      phone,
    },
  });

  if (hospital) {
    return hospital;
  } else {
    false;
  }
}
