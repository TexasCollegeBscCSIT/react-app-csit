import React, { useState } from "react";

export default function TextPasswordInput({
  label = "Username",
  hinttext = "Username",
  type = "text",
}) {
  const [show, setShow] = useState({
    showPassword: false,
  });
  const showHide = (e) => {
    setShow({ showPassword: !show.showPassword });
  };

  return (
    <div className="h-fit my-3 grid grid-flow-row">
      <label className="text-sm font-semibold">{label}</label>
      {type == "text" ? (
        <input
          placeholder={hinttext}
          className="border border-gray-300 rounded-lg my-1 h-10 px-3"
        ></input>
      ) : (
        <div className="grid grid-flow-col h-10 grid-cols-12 w-full border border-gray-300 rounded-lg mt-1">
          <div className="col-span-11">
            <input
              type={show.showPassword ? "text" : "password"}
              placeholder={hinttext}
              className="border-none h-fit px-3 mt-1.5 w-full mr-4 outline-none"
            ></input>
          </div>
          <div
            onClick={(e) => showHide(e)}
            className="col-span-1 text-2xl bg-slate-300 p-0.5 cursor-pointer hover:bg-slate-400 overflow-hidden mx-auto w-full"
          >
            &nbsp;&spades;
          </div>
        </div>
      )}
    </div>
  );
}
