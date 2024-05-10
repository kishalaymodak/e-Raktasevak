"use server";

import client from "@/db";

export interface bloodtype {
  id?: string;
  bloodtype: string;
  bottleid: string;
  dob: string;
  exp?: string;
  authorId: string;
}

export async function createBlood({
  bloodtype,
  bottleid,
  dob,
  authorId,
  exp,
}: bloodtype) {
  // should add zod validation here
  const date = new Date(dob);
  exp = String(date.setDate(date.getDate() - 1));
  const bloodty = bloodtype.toUpperCase();
  const blood = await client.blood.create({
    data: {
      bloodtype: bloodty,
      bottleid,
      dob,
      authorId,
      exp,
    },
  });

  if (blood) {
    return blood;
  } else {
    false;
  }
}
