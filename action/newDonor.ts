"use server";

import client from "@/db";

export async function newDonner(phone: string) {
  const user = await client.user.findFirst({
    where: {
      phone,
    },
  });
  if (user) {
    return true;
  } else {
    return false;
  }
}
