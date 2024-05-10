"use server";

import client from "@/db";

export async function deleteBlood(id: string) {
  console.log("inside delete");
  console.log(id);

  const blood = await client.blood.delete({
    where: {
      id,
    },
  });
  console.log(blood);
  return blood;
}
