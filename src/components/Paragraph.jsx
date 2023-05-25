import React from "react";

const Paragraph = ({ text, type = "sm", className }) => {
  return (
    <div>
      <p
        className={`${
          type === "sm"
            ? "text-base font-medium text-gray-400"
            : "text-xl font-semibold text-darkBlue"
        } ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export { Paragraph };
