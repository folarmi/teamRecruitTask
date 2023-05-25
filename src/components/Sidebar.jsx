import React from "react";
import { NameandTitle } from "./NameandTitle";
import { Paragraph } from "./Paragraph";
import mastercardLogo from "../assets/mastercard.png";
import { BsSim } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { MdReceiptLong } from "react-icons/md";
import { RoundDiv } from "./RoundDiv";

const Sidebar = () => {
  return (
    <div className="bg-[#EFF5F8] rounded-lg relative h-full">
      <section className="flex flex-col items-around self-start justify-center pt-80">
        <NameandTitle name="Company" title="Apple" />
        <NameandTitle name="Order Number" title="1266201" />
        <NameandTitle name="Product" title="Mackbook Air" />
        <NameandTitle name="VAT(20%)" title="$100.00" />
      </section>

      <div className="border-b border-dotted border-[#D4D9E3] border-2 my-4"></div>

      <section className="flex items-center justify-around pb-16">
        <div className="">
          <Paragraph text="You have to Pay" />
          <p className="text-darkblue font-semibold text-3xl">
            549. <span className="text-lg">99</span>{" "}
          </p>
        </div>
        <MdReceiptLong className="text-[#505971] text-3xl" />
      </section>

      <div className="bg-white text-black mx-20 flex flex-col w-56 rounded-lg h-80 absolute -top-16 shadow-md">
        <section className="flex justify-around w-full mt-8">
          <BsSim className="text-[#C7C7C7] text-3xl" />
          <AiOutlineWifi className="text-[#8F97AC] text-3xl" />
        </section>
        <Paragraph text="" />
        <section className="mx-10">
          <p className="text-sm font-medium pt-20 pb-4 text-darkBlue">
            Jonathan Micheal
          </p>
          <section className="flex items-center">
            <RoundDiv />
            <RoundDiv />
            <RoundDiv />
            <RoundDiv />
            <p className="text-base font-medium text-darkBlue pl-4">3456</p>
          </section>
          <div className="flex items-center justify-between mt-12">
            <p className="text-base font-medium text-darkBlue">09/22</p>
            <img src={mastercardLogo} alt="mastercardLogo" className="w-10" />
          </div>
        </section>
      </div>
    </div>
  );
};

export { Sidebar };
