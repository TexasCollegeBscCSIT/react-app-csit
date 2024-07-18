import React from "react";
import TextPasswordInput from "../components/input/TextPasswordInput";
import GuestLayout from "../layouts/GuestLayout";

export default function Login() {
  return (
    <GuestLayout>
      <div className=" h-screen container mx-auto ">
        <div className="mx-6 grid bg-slate-200 h-full">
          <div className="w-2/6 bg-white text-black rounded-md border-gray-300 p-8 border mx-auto mt-32 h-fit">
            <h1 className="text-center text-xl font-normal text-gray-700">
              Access to your acccount
              <div className="text-sm text-gray-500">
                Login to access your personal account
              </div>
            </h1>
            {/* input compoenents */}
            <TextPasswordInput
              label="Email / Username"
              hinttext="Registered email"
            ></TextPasswordInput>

            <TextPasswordInput
              label="Password"
              hinttext=""
              type="password"
            ></TextPasswordInput>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
