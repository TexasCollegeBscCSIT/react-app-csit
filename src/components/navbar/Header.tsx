import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { useState } from "react";

export default function Header() {
  const [enabled, setEnabled] = useState(false);
  const listStyle =
    // "list-none float-left text-md uppercase cursor-pointer text-black hover:text-slate-300 ml-28 transition-all";
    "list-none float-left text-lg uppercase font-bold cursor-pointer  ml-28 ";
  // position: sticky; top: 0px; z-index: 9999; width: 100%;
  return (
    <>
      <div className="h-10 bg-[#001E2B]">
        <p className="text-xs pl-10 pt-3 text-white font-mono font-semibold">
          <a href={"/contact"}>
            <span className="bg-[#B1FF05] text-black font-thin p-1 rounded-2xl mr-3">
              Join Now
            </span>
          </a>
          We're announcing the enrolement of this year, starting since July 10.
        </p>
      </div>
      <div className="bg-white sticky top-0 w-[100%] border-gray-500 border-b">
        <div className=" w-full h-24 grid grid-flow-col container mx-auto overflow-hidden ">
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
    </>
  );
}
