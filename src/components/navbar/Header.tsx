import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

export default function Header() {
  const listStyle =
    // "list-none float-left text-md uppercase cursor-pointer text-black hover:text-slate-300 ml-28 transition-all";
    "list-none float-left text-lg uppercase font-bold cursor-pointer  ml-28 ";

  return (
    <div className="bg-white">
      <div className=" w-full h-24 grid grid-flow-col container mx-auto overflow-hidden">
        <div className="col-span-2">
          <Logo></Logo>
        </div>
        <div className="col-span-7">
          <ul className="text-black float-end my-9 mx-10 ml-10">
            <Link className={listStyle} to={"/"}>
              Home
            </Link>
            <Link className={listStyle} to={"/about"}>
              About Us
            </Link>
            <Link className={listStyle} to={"/ourTeam"}>
              Our Team
            </Link>
            <Link className={listStyle} to={"/contact"}>
              Contact
            </Link>
          </ul>
        </div>
        <div className="col-span-3">
          <ul className="my-9 text-center  border-gray-700">
            <Link
              to={"/register"}
              className="mx-6 text-black px-3 py-2 rounded-2xl bg-cyan-600/90 hover:bg-cyan-500 font-bold transition-all cursor-pointer"
            >
              Register
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
