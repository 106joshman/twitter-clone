import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import InputField from "./InputField";

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky justify-between items-center top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-l sm:text-lg font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 w-9 h-9 ">
          <HiOutlineSparkles className="h-5" />
        </div>
      </div>
      <InputField />
    </div>
  );
}
