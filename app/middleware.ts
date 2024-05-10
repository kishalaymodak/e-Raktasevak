import { getServerSession } from "next-auth";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/hospital/home/*"],
};
export default withAuth(async (req) => {
  const token = req.nextauth.token;
  console.log(token);

  if (!token?.sub) {
    return NextResponse.redirect(new URL("/invalidsession", req.url));
  }

  const seassion = getServerSession();
  if (!seassion) {
    return NextResponse.redirect(new URL("/invalidsession", req.url));
  }
});
