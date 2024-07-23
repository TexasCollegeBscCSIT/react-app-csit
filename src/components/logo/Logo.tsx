import { Link } from "react-router-dom";
import "./../css/logo.css";

export default function Logo() {
  return (
    <div className=" w-16 bg-white">
      <Link to="/">
        <img
          className=" object-fill mt-3.5"
          src="./src/assets/hat.png"
          alt="Logo"
        />
      </Link>
    </div>
  );
}
