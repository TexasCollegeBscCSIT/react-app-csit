import React from "react";

export default function About() {
  return (
    <div className=" w-full min-h-screen grid grid-flow-row ">
      <div className="w-full bg-[url(./src/assets/aboutUs-background1.png)] bg-cover bg-no-repeat bg-right grid grid-flow-col">
        <div className="py-32 pr-10 w-[800px] pl-20">
          <p className="italic pl-1">Inspiration, Innovation and Discovery.</p>
          <h1 className="text-6xl font-semibold">
            Empowering students with Nepal's Best College.
          </h1>
          <div className="w-full mt-4">
            <p className="w-[88%]">
              Any successful career starts with good education. Together with us
              you will have deeper knowledge of the subjects that will be
              especially useful for you when climbing the career ladder.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFDD0] h-36 w-full flex items-center justify-center gap-16">
        <div className="flex items-center justify-center">
          <img
            className="h-16 w-16"
            src="./src/assets/hat.png"
            alt="graduation_cap"
          />
          <div>
            <h1 className="uppercase pl-2 text-black font-semibold text-2xl">
              best college in nepal
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img className="h-12 w-16 " src="./src/assets/bell.png" alt="bell" />
          <div>
            <h1 className="uppercase pl-2 text-black font-semibold text-2xl">
              learn courses online
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="h-11 w-16"
            src="./src/assets/bookStand.png"
            alt="book stand"
          />
          <div>
            <h1 className="uppercase pl-2 text-black font-semibold text-2xl">
              book library & store
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
