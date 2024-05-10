import React from "react";

import NewDonnerChecker from "@/components/NewDonnerChecker";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";
import { redirect } from "next/navigation";
async function User() {
  const seassion = await getServerSession(authOption);
  console.log(seassion);
  if (!seassion) {
    redirect("/hospital/signin");
  }

  return (
    <div>
      <NewDonnerChecker />
    </div>
  );
}

export default User;
