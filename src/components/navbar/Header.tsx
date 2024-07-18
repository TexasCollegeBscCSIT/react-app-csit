import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

export default function Header() {
  const listStyle =
    "list-none float-left text-md uppercase cursor-pointer text-slate-500 hover:text-slate-300 ml-28 transition-all";

  return (
    <div className="bg-black/90">
      <div className=" w-full h-24 grid grid-flow-col container mx-auto">
        <div className="col-span-2">
          <Logo></Logo>
        </div>
        <div className="col-span-7">
          <ul className="text-black float-end my-8 ml-10">
            <Link className={listStyle} to={"/"}>
              Home
            </Link>
            <Link className={listStyle} to={"about"}>
              About
            </Link>
            <Link className={listStyle} to={"services"}>
              Services
            </Link>
            <Link className={listStyle} to={"contact"}>
              Contact
            </Link>
          </ul>
        </div>
        <div className="col-span-3">
          <ul className="my-10 text-center float-end border-l-2 border-gray-700">
            <Link
              to={"/login"}
              className="float-left mx-6 text-gray-400 font-bold hover:text-slate-300 transition-all cursor-pointer"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="float-left mx-6 text-gray-400 font-bold hover:text-slate-300 transition-all cursor-pointer"
            >
              Register
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
