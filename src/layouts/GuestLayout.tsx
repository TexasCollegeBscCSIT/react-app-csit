import { useState } from "react";
import Header from "../components/navbar/Header";

export default function GuestLayout({ children }) {
  const [scrollValue, setScrollValue] = useState(0);
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollValue(position);
  };

  return (
    <div
      onScroll={(e) => handleScroll(e)}
      className="max-h-screen max-w-screen overflow-y-auto overflow-x-hidden"
    >
      <Header scrollValue={scrollValue}></Header>
      <div className="bg-black/75 h-screen w-screen">
        <div
          className={`mx-auto transition-all duration-700 ${
            scrollValue >= 18 ? "mt-12" : "mt-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
