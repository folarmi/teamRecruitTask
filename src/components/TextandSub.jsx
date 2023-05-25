import React from "react";
import { Paragraph } from "./Paragraph";

const TextandSub = ({ title, subTitle, className }) => {
  return (
    <div className={`${className}`}>
      <Paragraph text={title} type="lg" className="pb-2 pt-8" />
      <Paragraph text={subTitle} type="sm" />
    </div>
  );
};

export { TextandSub };
