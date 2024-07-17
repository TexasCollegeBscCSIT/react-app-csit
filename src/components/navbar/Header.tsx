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
            <li className={listStyle}>Home</li>
            <li className={listStyle}>About</li>
            <li className={listStyle}>Services</li>
            <li className={listStyle}>Contact</li>
          </ul>
        </div>
        <div className="col-span-3">
          <ul className="my-10 text-center float-end">
            <li className="float-left p-3 mx-6 text-gray-700 font-bold hover:text-slate-900 cursor-pointer ">
              Login
            </li>
            <li className="float-right p-3 mx-5 text-gray-700 font-bold hover:text-slate-900 cursor-pointer ">
              Register
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
