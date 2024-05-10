"use server";

import client from "@/db";

export async function hospitalSignIn(hospitalId: string, password: string) {
  const hospital = await client.hospital.findFirst({
    where: {
      hospitalId,
      password,
    },
  });
  if (hospital) {
    return hospital;
  } else {
    return false;
  }
}
