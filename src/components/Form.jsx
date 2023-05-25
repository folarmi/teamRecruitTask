import React from "react";
import { TextandSub } from "./TextandSub";
import { Input } from "./Input";
import mastercardLogo from "../assets/mastercard-logo.png";
import { MdModeEditOutline } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdViewCompact } from "react-icons/md";

const Form = () => {
  return (
    <form>
      <div className="flex justify-between mb-8">
        <TextandSub
          title="Card Number"
          subTitle="Enter the 16-digit card number on the card"
          className=""
        />
        <div className="flex items-center">
          <MdModeEditOutline className="text-primary" />
          <p className="text-primary text-base font-medium pl-2">Edit</p>
        </div>
      </div>
      <Input
        placeholder="2412  -  7512  -  3412  -  3456"
        ifPrefixImg
        ifSuffixIcon
        suffixIconColor="#015efe"
        prefixImg={mastercardLogo}
        SuffixIcon={BsFillPatchCheckFill}
      />

      <div className="lg:flex items-center w-full">
        <TextandSub
          title="CVV Number"
          subTitle="Enter the 3 or 4 digit number on the card"
          className="lg:w-1/2"
        />
        <div className="w-full">
          <Input
            className="mt-2 lg:mt-8 w-full"
            ifSuffixIcon
            SuffixIcon={MdViewCompact}
            suffixIconColor="#DC143C"
          />
        </div>
      </div>

      <div className="lg:flex items-center w-full">
        <TextandSub
          title="Expiry Date"
          subTitle="Enter the expiration date of the card"
          className="lg:w-1/2"
        />
        <div className="w-full flex lg:mt-8">
          <Input className="lg:w-1/2" />
          <p className="px-4 lg:px-8 text-darkBlue font-bold text-3xl flex justify-center">
            /
          </p>
          <Input className="lg:w-1/2" />
        </div>
      </div>

      <div className="lg:flex items-center w-full">
        <TextandSub
          title="Password"
          subTitle="Enter your dynamic password"
          className="lg:w-1/2"
        />
        <div className="w-full">
          <Input
            className="mt-2 lg:mt-8 w-full"
            ifSuffixIcon
            SuffixIcon={MdViewCompact}
          />
        </div>
      </div>

      <button className="bg-primary font-semibold text-xl w-full text-white p-4 rounded my-8 disabled:bg-gray-400 mb-24 lg:mb-0">
        Pay Now
      </button>

      <div id="navigation">
        {/* <SidevarNavigationItem Icon={HomeIcon} name="Homepage" source="/" />
    <SidevarNavigationItem
      Icon={StarIcon}
      name="Tournaments"
      source="/tournaments"
    /> */}
      </div>
    </form>
  );
};

export { Form };
