import React from "react";

const Timer = ({ number }) => {
  return (
    <div className="bg-darkBlue px-2 py-1 rounded-md mr-1">
      <p className="text-white font-semibold text-lg">{number}</p>
    </div>
  );
};

export { Timer };
