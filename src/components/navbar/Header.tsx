import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

export default function Header() {
  const listStyle =
    "list-none float-left text-lg uppercase font-bold cursor-pointer hover:text-pink-600 ml-28";

  return (
    <div className="bg-slate-100">
      <div className=" w-full h-32 grid grid-flow-col container mx-auto">
        <div className="col-span-2">
          <Logo></Logo>
        </div>
        <div className="col-span-7">
          <ul className="text-black float-end my-12 ml-10">
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
          <ul className="my-10 text-center float-end">
            <Link
              to={"login"}
              className="float-left p-3 mx-6 text-gray-700 font-bold hover:text-slate-900 cursor-pointer"
            >
              Login
            </Link>
            <Link
              to={"register"}
              className="float-left p-3 mx-6 text-gray-700 font-bold hover:text-slate-900 cursor-pointer"
            >
              Register
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
