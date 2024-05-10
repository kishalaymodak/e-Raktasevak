"use server";

import client from "@/db";

export async function findDonor(
  bloodgroup: string,
  city: string,
  state: string
) {
  const bloodgroupUpper = bloodgroup.toUpperCase();
  const cityUpper = city.toUpperCase();
  const stateUpper = state.toUpperCase();
  const user = await client.user.findMany({
    where: {
      bloodgroup: bloodgroupUpper,
      city: cityUpper,
      state: stateUpper,
    },
  });
  return user;
}
