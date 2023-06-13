import React from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { VscSmiley } from "react-icons/vsc";


export default function InputField() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://pbs.twimg.com/profile_images/1532796563831021568/lqeArjHg_400x400.jpg"
        alt="user-image"
        className="rounded-full w-11 h-11 xl:mr-2 cursor-pointer hover:brightness-95"
      />

      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" placeholder="Whats happening?" rows="2"></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <HiOutlinePhoto  className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-500"/>
            <VscSmiley className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-500"/>
          </div>

          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
        </div>
      </div>
    </div>
  );
}
