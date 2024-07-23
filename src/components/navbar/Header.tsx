import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Header() {
  const [enabled, setEnabled] = useState(false);
  const listStyle =
    // "list-none float-left text-md uppercase cursor-pointer text-black hover:text-slate-300 ml-28 transition-all";
    "list-none float-left text-lg uppercase font-bold cursor-pointer  ml-28 dark:text-white";

  const toggleLightDarkMode = () => {
    setEnabled(!enabled);
    console.log(enabled);
    const newMood = enabled ? "light" : "dark";
    localStorage.setItem("theme-mood", newMood);
    document.getElementById("main-body")?.setAttribute("data-mode", newMood);
  };
  return (
    <>
      <div className="w-full h-5 bg-white"></div>
      <div className={"bg-white dark:bg-black top-0 w-full sticky"}>
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
            <ul className="my-9 mx-8 grid grid-flow-col border-gray-700">
              <li>
                <Link
                  to={"/register"}
                  className="mx-6 text-black px-3 py-2 rounded-2xl bg-cyan-600/90 hover:bg-cyan-500 font-bold transition-all cursor-pointer"
                >
                  Register
                </Link>
              </li>
              <li>
                <Switch
                  checked={enabled}
                  onChange={toggleLightDarkMode}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
