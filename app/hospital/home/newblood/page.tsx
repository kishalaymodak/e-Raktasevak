import CreateBlood from "@/components/CreateBlood";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function blood() {
  const session = await getServerSession(authOption);
  if (!session) {
    redirect("/hospital/signin");
  }
  return (
    <div>
      <CreateBlood />
    </div>
  );
}

export default blood;
