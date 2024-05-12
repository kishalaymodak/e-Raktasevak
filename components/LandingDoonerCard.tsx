import React from "react";
import Link from "next/link";

function LandingDooner() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 flex justify-center lg:py-32 bg-gray-100 dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid justify-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg text-black dark:text-white bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Blood Banks
                </div>
                <h2 className="text-3xl font-bold  text-black dark:text-white tracking-tighter sm:text-5xl">
                  Find the Nearest Blood Bank
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Search for the nearest blood banks based on your location and
                  blood group. Get details like contact information, operating
                  hours, and availability.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/find/blood"
                >
                  Find Blood Banks
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block  text-black dark:text-white rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Blood Donors
                </div>
                <h2 className="text-3xl  text-black dark:text-white font-bold tracking-tighter sm:text-5xl">
                  Find Blood Donors Near You
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Search for registered blood donors in your area based on your
                  blood group. Get their contact information and availability to
                  coordinate a donation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/find/donor"
                >
                  Find Blood Donors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingDooner;
