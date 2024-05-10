import DonerForm from "@/components/DonerForm";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function newUser() {
  const seassion = await getServerSession(authOption);
  if (!seassion) {
    redirect("/hospital/signin");
  }
  return (
    <div>
      <DonerForm />
    </div>
  );
}

export default newUser;
