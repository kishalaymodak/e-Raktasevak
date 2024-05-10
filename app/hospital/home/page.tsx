import HospitalHome from "@/components/HospitalHome";
import { getHospitalData } from "@/action/getHospitalData";
import { Providers } from "@/app/provider";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";
import { redirect } from "next/navigation";
async function home() {
  // console.log(url);
  // console.log(data);
  const session = await getServerSession(authOption);
  if (!session) {
    redirect("/hospital/signin");
  }

  const id = session.user.id;
  const data = await getHospitalData(id);
  console.log(data);

  return (
    <div>
      <HospitalHome name={data?.name} id={data?.id} bloods={data?.bloods} />
    </div>
  );
}

export default home;
