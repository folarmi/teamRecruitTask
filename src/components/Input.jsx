import React from "react";
import { MdModeEditOutline } from "react-icons/md";

const Input = ({
  placeholder,
  className,
  ifPrefixIcon = false,
  PrefixIcon,
  prefixiconColor,
  ifSuffixIcon,
  SuffixIcon,
  suffixIconColor,
  ifPrefixImg,
  prefixImg,
}) => {
  return (
    <div className={`relative ${className}`}>
      {ifPrefixIcon && (
        <div class="absolute inset-y-0 left-0 flex items-center pl-1 lg:pl-3 pointer-events-none">
          <PrefixIcon className={`text-[${prefixiconColor}] text-3xl`} />
        </div>
      )}
      {ifPrefixImg && (
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={prefixImg} alt="prefixImg" className="w-10" />
        </div>
      )}
      <input
        type="email"
        className={`pl-14 lg:pl-24 border rounded p-2 py-3 w-full bg-gray-50 ${className}`}
        placeholder={placeholder}
      />
      {ifSuffixIcon && (
        <div class="absolute inset-y-0 right-0 flex items-center pr-4 lg:pr-8 pointer-events-none">
          <SuffixIcon className={`text-[${suffixIconColor}] text-3xl`} />
        </div>
      )}
    </div>
  );
};

export { Input };
