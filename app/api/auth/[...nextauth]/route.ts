import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@/db";
import { redirect } from "next/navigation";
import { authOption } from "@/lib/auth";

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
