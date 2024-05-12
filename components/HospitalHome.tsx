"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { getHospitalData, home } from "@/action/getHospitalData";
import { deleteBlood } from "@/action/deleteBlood";

function HospitalHome({ name, id, bloods }: home) {
  // const ID = url;
  // console.log(url);
  // async function getdata(ID: string) {
  //   const data = await getHospitalData(url);
  // console.log();
  // }
  // getdata(ID);
  const seassion = useSession();
  console.log(seassion);

  const [data, setData] = useState("");
  const [def, setDef] = useState(["AB+", "A+", "A-"]);

  if (name && id && bloods)
    return (
      <div>
        <Navbar name={name} id={id} />
        <div className=" mx-20 my-10 grid grid-cols-4 justify-between gap-4">
          {["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"].map((type) => (
            <Card setData={setData} name={type} bloods={bloods} />
          ))}
        </div>
        <div className="mb-10">
          <div className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4me-2 mb-2.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Blood Bottle With BottleId "
                onChange={(e) => {
                  setData(e.target.value);
                }}
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Bottle Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Blood Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date Of Blood Taken
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date of Blood Expaire
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>

              {bloods.map((blood) => {
                if (
                  data == blood.bloodtype ||
                  data == blood.bottleid ||
                  data == ""
                ) {
                  return (
                    <TableBody
                      key={blood.id}
                      id={blood.id}
                      BottleId={blood.bottleid}
                      Bloodtype={blood.bloodtype}
                      Dob={blood.dob}
                      exp={blood.exp}
                    />
                  );
                }
              })}
            </table>
          </div>
        </div>
      </div>
    );
}

export default HospitalHome;

interface card {
  name: string;
  BottleNo?: string;
  bloods: {
    id: string;
    bloodtype: string;
    bottleid: string;
    dob: string;
    exp: string;
    used: boolean;
    authorId: string;
  }[];
  setData: React.Dispatch<React.SetStateAction<string>>;
}

function Card({ name, BottleNo, bloods, setData }: card) {
  return (
    <div className=" flex justify-between items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {BottleNo}
        </p>
      </div>
      <div className=" justify-center items-center">
        <button
          onClick={() => {
            console.log("inside butten " + name);
            setData(name);
          }}
          className=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          check
        </button>
      </div>
    </div>
  );
}

interface table {
  id: string;
  BottleId: string;
  Bloodtype: string;
  Dob: string;
  exp: string;
}

const TableBody = ({ BottleId, Bloodtype, Dob, exp, id }: table) => {
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {BottleId}
        </th>
        <td className="px-6 py-4">{Bloodtype}</td>
        <td className="px-6 py-4">{Dob}</td>
        <td className="px-6 py-4">{exp}</td>
        <td className="px-6 py-4">{}</td>
        <td
          className="px-6 py-4 cursor-pointer"
          onClick={async () => {
            await deleteBlood(id);
          }}
        >
          {
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
          }
        </td>
      </tr>
    </tbody>
  );
};
type nav = {
  name: string;
  id: string;
};
const Navbar = ({ name, id }: nav) => {
  const route = useRouter();
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {name}
          </span>

          <div className="flex gap-2 justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => {
                route.push(`/hospital/home/user`);
              }}
            >
              Add New Blood
            </button>
            <button
              onClick={() => {
                route.push("/");
                signOut();
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
