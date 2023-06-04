import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  HiOutlineBell,
  HiOutlineInbox,
  HiOutlineClipboard,
  HiOutlineDotsCircleHorizontal,
  HiOutlineHashtag,
  HiOutlineUser,
} from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* LOGO */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          width='50'
          height='50'
        ></Image>
      </div>
      {/* MENU */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={AiFillHome} active />
        <SidebarMenuItem text="Explore" Icon={HiOutlineHashtag} />
        <SidebarMenuItem text="Notifications" Icon={HiOutlineBell} />
        <SidebarMenuItem text="Messages" Icon={HiOutlineInbox} />
        <SidebarMenuItem text="Bookmarks" Icon={BsBookmark} />
        <SidebarMenuItem text="Lists" Icon={HiOutlineClipboard} />
        <SidebarMenuItem text="Profile" Icon={HiOutlineUser} />
        <SidebarMenuItem text="More" Icon={HiOutlineDotsCircleHorizontal} />
      </div>

      {/* BUTTON */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* MINI PROFILE */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://pbs.twimg.com/profile_images/1532796563831021568/lqeArjHg_400x400.jpg"
          alt="user-image"
          className="rounded-full w-10 h-10 xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Ejembi Joshua</h4>
          <p className="text-gray-500">@ayam_joshman</p>
        </div>
        <BiDotsHorizontalRounded className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
