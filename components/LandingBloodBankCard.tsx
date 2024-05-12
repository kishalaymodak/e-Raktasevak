import React from "react";

function LandingBlood() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 flex justify-center lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How e-Raktasevak Works
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our platform makes it easy to find the blood you need, when you
                need it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-4">
                <SearchIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Search</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your blood group and location to find the nearest blood
                  bank or donor.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <MapPinIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Locate</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our platform will show you the closest blood bank or donor
                  based on your search.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <PhoneIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Contact the blood bank or donor directly to coordinate your
                  donation or collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
export default LandingBlood;
