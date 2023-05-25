import React from "react";
import { Timer } from "./Timer";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between">
      <section className="flex items-center">
        <img src={logo} alt="AcepayLogo" className="w-48 object-contain" />
      </section>
      <div className="flex items-center">
        <Timer number="0" />
        <Timer number="1" />
        <p className="mr-1 text-black font-semibold"> :</p>
        <Timer number="1" />
        <Timer number="9" />
      </div>
    </div>
  );
};

export { Header };
