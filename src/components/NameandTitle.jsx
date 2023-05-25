import React from "react";
import { Paragraph } from "./Paragraph";

const NameandTitle = ({ name, title }) => {
  return (
    <div className="flex items-center justify-around mb-2">
      <Paragraph text={name} type="sm" />
      <p className="text-lg font-semibold text-darkBlue align-left">{title}</p>
    </div>
  );
};

export { NameandTitle };
