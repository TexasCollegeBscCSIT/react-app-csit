import GuestLayout from "../layouts/GuestLayout";
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

  const onSubmit: SubmitHandler<Inputs> = () => {
    // api call
    alert("Login functionality");
  };

  return (
    <div className=" h-screen container">
      <div className="mx-6 grid h-full grid-cols-2">
        <div className="ml-10 w-fit bg-zinc-400 text-black rounded-2xl border-black py-12 px-10 border-none mt-32 h-fit drop-shadow-lg">
            <h1 className="text-center text-5xl font-semibold text-black">
              Login
              </h1>
              <div className="text-sm text-center mt-2 text-gray-700">
                Login to access your personal account
              </div>
              <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                  <label className="flex w-full text-md">
                    Email / Username
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email field is required",
                    })}
                    className="w-full border-black border-2 bg-white h-9 rounded-xl px-3 outline-none mt-1"
                  />
                  <div className="custom-error text-red-500 text-xs place-content-start w-full grid mt-0.5">
                    {errors.email && errors.email.message}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="flex w-full text-md">Password</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password field is required",
                      min: 3,
                    })}
                    className="w-full border-2 border-black bg-white h-9 rounded-xl px-3 outline-none mt-1"
                  />
                  <div className="custom-error text-red-500 text-xs place-content-start w-full grid mt-0.5">
                    {errors.password && errors.password.message}
                  </div>
                </div>
                <div className="remeber-me mt-2">
                  <label htmlFor="remberMe" className="font-normal">
                    <input type="checkbox" />
                      Remember me
                  </label>
                  <Link
                    to={"forget-passsword"}
                    className="ml-24 place-content-end font-medium"
                  >
                    Forget Password ?
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    className="mt-5 w-full text-xl font-semibold rounded-xl h-9 hover:bg-blue-500 transition-all bg-blue-600"
                  >
                    Login
                  </button>
                </div>
                <div className="ml-16 mt-1">
                  <p>Don't have account?{" "}<a className="font-medium" href="#">Register</a></p>
                </div>
              </form>
        </div>
        <div className="h-fit mt-16 mr-10 p-15">
          <img className="w-full h-full drop-shadow-2xl" src="/src/assets/illustration.png" alt="illustration" />
        </div>
      </div>
    </div>
  );
}
