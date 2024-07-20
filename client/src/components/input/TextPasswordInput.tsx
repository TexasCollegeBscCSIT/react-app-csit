import React, { useEffect, useRef, useState } from "react";
import "./css/input.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function TextPasswordInput({
  label = "Username",
  hinttext = "Username",
  type = "text",
  errorMsg = "Field value is required",
  value = "",
}) {
  const textInputRef = useRef("");
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState({ msg: errorMsg });
  const [show, setShow] = useState({
    showPassword: false,
  });

  const inputChange = (e) => {
    if (e.target.value.length == 0) {
      setError({ msg: "Field value is required" });
    }
  };

  return (
    <div className="h-fit my-3 grid grid-flow-row">
      <label className="text-sm font-semibold">{label}</label>
      {type == "text" ? (
        <div>
          <input
            ref={() => textInputRef}
            onKeyUp={(e) => inputChange(e)}
            placeholder={hinttext}
            className="border border-gray-300 rounded-lg my-1 h-10 px-3 w-full"
          ></input>
        </div>
      ) : (
        <>
          <div className="grid grid-flow-col h-10 grid-cols-12 w-full border border-gray-300 rounded-lg mt-1">
            <div className="col-span-11">
              <input
                onKeyUp={(e) => inputChange(e)}
                type={show.showPassword ? "text" : "password"}
                placeholder={hinttext}
                className="border-none h-fit px-3 mt-1.5 w-full mr-4 outline-none"
              ></input>
            </div>
            <div
              onClick={() => setShow({ showPassword: !show.showPassword })}
              className="col-span-1 text-2xl grid place-content-center cursor-pointer overflow-hidden mx-auto w-full"
            ></div>
          </div>
        </>
      )}
    </div>
  );
}
