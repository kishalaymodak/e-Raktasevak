"use server";
import client from "@/db";

export async function getHospitalData(id: string) {
  //   console.log(hospitalId);
  //   console.log(typeof hospitalId);
  const used = false;
  try {
    const blood = await client.hospital.findFirst({
      where: {
        id,
      },

      select: {
        name: true,
        id: true,
        bloods: true,
      },

      //   include: {
      //     bloods: true,
      //   },
    });
    if (blood) return blood;
  } catch (e) {
    console.log(e);
  }
}
export type home = {
  id?: string;
  name?: string;
  bloods?:
    | {
        id: string;
        bloodtype: string;
        bottleid: string;
        dob: string;
        exp: string;
        used: boolean;
        authorId: string;
      }[];
};
