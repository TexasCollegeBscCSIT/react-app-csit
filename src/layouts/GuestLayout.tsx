import { useState } from "react";
import Header from "../components/navbar/Header";

export default function GuestLayout({ children }) {
  // const handleScroll = (e) => {
  //   const { scrollTop, scrollHeight, clientHeight } = e.target;
  //   const position = Math.ceil(
  //     (scrollTop / (scrollHeight - clientHeight)) * 100
  //   );
  //   setScrollValue(position);
  // };

  return (
    <div className="max-h-screen max-w-screen overflow-y-auto overflow-x-hidden">
      <Header></Header>
      <div className="bg-white h-screen w-screen">
        <div className={`mx-auto transition-all duration-700`}>{children}</div>
      </div>
    </div>
  );
}
