import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // api call
    alert("Login functionality");
  };

  return (
    <div className=" h-screen container mx-auto ">
      <div className="mx-6 grid h-full">
        <div className="w-2/6 bg-black/80 text-black rounded-md border-gray-900 p-8 border mx-auto mt-32 h-fit">
          <h1 className="text-center text-xl font-normal text-gray-400">
            Access to your acccount
            <div className="text-sm text-gray-500">
              Login to access your personal account
            </div>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="my-6">
                <label className="flex w-full text-sm">Email / Username</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email field is required",
                  })}
                  className="w-full bg-slate-700 h-9 rounded-md px-3 border-none outline-none mt-1"
                />
                <div className="custom-error text-red-500 text-xs place-content-start w-full grid mt-0.5">
                  {errors.email && errors.email.message}
                </div>
              </div>
              <div>
                <label className="flex w-full text-sm">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password field is required",
                    min: 3,
                  })}
                  className="w-full bg-slate-700 h-9 rounded-md px-3 border-none outline-none mt-1"
                />
                <div className="custom-error text-red-500 text-xs place-content-start w-full grid mt-0.5">
                  {errors.password && errors.password.message}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md h-9 hover:bg-slate-600 transition-all my-8 bg-slate-700"
                >
                  Login
                </button>
              </div>
              <div>
                <Link
                  to={"forget-passsword"}
                  className="text-xs w-full grid place-content-end"
                >
                  Forget Password ?
                </Link>
              </div>
            </form>
          </h1>
        </div>
      </div>
    </div>
  );
}
