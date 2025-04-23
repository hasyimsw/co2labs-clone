import React from "react";

export default function Advantages({ title, desc }) {
  return (
    <div className="items mb-5">
      <div className="flex items-center gap-10 mb-4">
        <div className="rounded-full sm:-ml-2 -ml-1 bg-gray-400 sm:w-5 w-1 sm:h-5 h-1 sm:p-0 p-2"></div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="flex gap-10">
        <div className="bg-gray-400 w-1"></div>
        <div className="bg-white shadow-xl p-5 rounded-lg w-full">{desc}</div>
      </div>
    </div>
  );
}
