import React from "react";
import profile from "../assets/imgs/profile.svg";
import notice from "../assets/imgs/notice.svg";
import { IoSearch } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <div className="px-5 h-20 w-full border-b border-gray-2 flex items-center justify-between">
      <div className="text-primary-1 font-bold text-3xl">LOGO</div>
      <div className="mr-5 relative flex-grow max-w-[500px]">
        <input
          type="text"
          name="title"
          className="pl-3 pr-10 border border-gray-2 rounded-2xl bg-gray h-10 w-full focus:outline-gray-2 mx-3 text-gray-600"
        />
        <IoSearch className="text-gray-500 text-2xl absolute right-0 top-2.5" />
      </div>
      <div className="relative">
        <div className="flex">
          <img src={notice} alt="notice" className="mr-3 h-15 w-15" />
          <img src={profile} alt="profile" className="mr-3 h-15 w-15" />
          <div className="flex-col border border-none rounded-md bg-gray-1 w-[7rem] h-[5rem] absolute top-7 right-10 items-center justify-center">
            <div className="">로그인</div>
            <div>회원가입</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
