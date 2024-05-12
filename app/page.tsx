import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import LandingBlood from "@/components/LandingBloodBankCard";
import { Analytics } from "@vercel/analytics/react";
import LandingDooner from "@/components/LandingDoonerCard";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Landing />
      <LandingBlood />
      <LandingDooner />
      <Footer />
      <Analytics />
    </div>
  );
}
