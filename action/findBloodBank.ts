"use server";

import client from "@/db";

export async function findBloodBank(
  bloodtype: string,
  city: string,
  state: string
) {
  const used = false;
  const bloodty = bloodtype.toUpperCase();
  const cityUpper = city.toUpperCase();
  const stateUpper = state.toUpperCase();
  const blood = await client.hospital.findMany({
    where: {
      city: cityUpper,
      state: stateUpper,
      bloods: {
        some: {
          bloodtype,
          used,
        },
      },
    },

    include: {
      bloods: {
        where: {
          bloodtype,
        },
      },
    },
  });

  return blood;
}

export interface Blood {
  id: string;
  name: string;
  loclity: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  password: string;
  hospitalId: string;
  bloods: {
    id: string;
    bloodtype: string;
    bottleid: string;
    dob: string;
    exp: string;
    used: boolean;
    authorId: string;
  }[];
}
[];
