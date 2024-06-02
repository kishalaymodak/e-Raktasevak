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

  //date change
  const date = new Date(dob);
  date.setDate(date.getDate() + 120);
  const tomorrow = new Date(date);
  const tomorrowString = tomorrow.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  exp = tomorrowString;
  //

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
