import React from "react";

const Quote = ({ quote }) => {
  if (quote === null) return;

  return (
    <div className="bg-[#2594C3] flex justify-center py-8 px-28 pb-12 overflow-hidden items-center flex-col">
      <span className="text-8xl self-start text-white">"</span>
      <p className="text-2xl text-[#fff]">{`${quote}"`}</p>
    </div>
  );
};

export default Quote;
