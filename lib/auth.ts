import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@/db";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        HospitalID: { label: "HospitalID", type: "text", placeholder: "" },
        Password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        const hospitalId = credentials.HospitalID;
        const password = credentials.Password;

        const user = await client.hospital.findUnique({
          where: {
            hospitalId,
            password,
          },
        });
        console.log(user);

        if (user) {
          console.log("user ");
          return {
            id: user.id,
            name: user.name,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
  pages: {
    signIn: "/hospital/signin",
  },
};
