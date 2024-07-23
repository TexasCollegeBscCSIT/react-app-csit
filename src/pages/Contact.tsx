import React from "react";

export default function Contact() {
  return (
    <div className="bg-white h-full">
      <div className="w-full container grid grid-flow-col grid-cols-2 mx-auto ">
        <div className=" text-black contact-info pl-28  my-auto  ">
          <div className="p-10  w-96 text-justify ">
            <h1 className="text-5xl text-[#6A2DE9] font-bold">Get in touch</h1>
            <p className="mt-4 font-semibold">
              We're here to help. Chat to our friendly team 24/7 and get set up
              and ready to go in just 5 minutes.
            </p>
            <div className="pt-8 ">
              <a
                className="flex w-full text-[#6A2DE9] font-bold pb-1"
                target="_blank"
                href="https://mail.google.com/mail/u/0/#inbox?compose=deepgeneral33@gmail.com"
              >
                <img className="pr-2" src="./src/assets/mail.svg" alt="mail" />
                Shoot us an email
              </a>
              <a
                className="flex w-full text-[#6A2DE9] font-bold"
                target="_blank"
                href="https://www.linkedin.com/messaging/thread/2-ZjQwNGIyMWItMTY4Ny00NzIwLTg2ZDItN2QyNjJlYmMzYzBjXzAxMw==/"
              >
                <img
                  className="pr-2"
                  src="./src/assets/linkedin.svg"
                  alt="linkedin"
                />
                Message us on LinkedIn
              </a>
            </div>
          </div>
          <div className="form w-96 pr-5">
            <form action="#">
              <div className="pl-10 column flex gap-5">
                <div>
                  <label className="flex w-full  font-semibold">
                    First Name
                  </label>
                  <input
                    className="flex w-full bg-white border border-gray-500 p-2 rounded-lg"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="flex w-full font-semibold">Last Name</label>
                  <input
                    className="flex w-full  bg-white border border-gray-500 p-2 rounded-lg"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="pl-10 mt-2">
                <label className="flex w-full font-semibold">Email</label>
                <input
                  className="flex w-full  bg-white border border-gray-500 p-2 rounded-lg"
                  type="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className="pl-10 mt-2">
                <label className="flex w-full font-semibold">
                  Phone Number
                </label>
                <input
                  className="flex w-full  bg-white border border-gray-500 p-2 rounded-lg"
                  type="number"
                  placeholder="+(977)-000-0000000"
                />
              </div>
              <div className="pl-10">
                <a href="#">
                  <button className="bg-[#6D2DF6] p-2 w-full mt-8 rounded-lg font-semibold text-white">
                    SEND MESSAGE
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="px-1 py-5">
          <img
            className="w-full rounded-lg"
            src="./src/assets/map.png"
            alt="map of college"
          />
        </div>
      </div>
    </div>
  );
}
