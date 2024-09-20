import React, { useState, useRef } from "react";
import Profile from "../assets/imgs/profile.svg";

const SignupForm = () => {
  const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>("");

  const imgRef = useRef<HTMLInputElement | null>(null);

  const saveImgFile = () => {
    if (imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setImgFile(reader.result);
      };
    }
  };

  return (
    <div className="flex flex-col w-[70%] m-auto border-2 border-gray-200 rounded-2xl px-4 py-7 sm:px-8 md:px-12">
      <div className="text-xl font-medium mb-10 self-center">회원가입</div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="flex-1 lg:pr-5">
          <p className="mb-2 text-gray-500 font-semibold">이메일</p>
          <div className="flex flex-row">
            <input className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2" />
            <div className="w-[100px] min-w-[100px] bg-primary-2 text-gray-700 p-2 ml-2 text-sm text-center rounded-md">
              중복 확인
            </div>
          </div>
          <p className="mb-2 mt-7 text-gray-500 font-semibold">비밀번호</p>
          <div className="flex flex-row">
            <input className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2" />
          </div>
          <p className="mb-2 mt-7 text-gray-500 font-semibold">비밀번호 확인</p>
          <div className="flex flex-row">
            <input className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2" />
          </div>
        </div>
        <div className="flex-1 lg:pl-5 mt-8 lg:mt-0">
          <p className="mb-2 text-gray-500 font-semibold">닉네임</p>
          <div className="flex flex-row">
            <input className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2" />
            <div className="w-[100px] min-w-[100px] bg-primary-2 text-gray-700 p-2 ml-2 text-sm text-center rounded-md">
              중복 확인
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start mt-7">
            <div className="flex-1">
              <p className="mb-2 text-gray-500 font-semibold">생년월일</p>
              <div className="w-full h-9 mr-0 lg:mr-6 px-3 py-1 border border-gray-2 rounded-md focus:outline-gray-2 text-center text-gray-500 cursor-pointer">
                선택
              </div>
              <p className="mb-2 mt-7 text-gray-500 font-semibold">성별</p>
              <div className="flex items-center">
                <input type="radio" name="gender" />
                <div className="px-4 py-1 text-gray-700">남성</div>
                <input type="radio" name="gender" />
                <div className="px-4 py-1 text-gray-700">여성</div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:ml-16 mt-7 lg:mt-0">
              <img
                src={imgFile ? (imgFile as string) : Profile}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-6"
              />
              <label className="min-w-[100px] cursor-pointer bg-primary-2 text-gray-700 py-1 px-2 text-xs text-center rounded-md">
                이미지 업로드
                <input
                  type="file"
                  accept="image/*"
                  ref={imgRef}
                  onChange={saveImgFile}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-7">
        <p className="mb-2 text-gray-500 font-semibold">선호 장르</p>
        <div className="flex flex-wrap flex-row w-full justify-evenly">
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 ml-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 ml-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 ml-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 ml-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 ml-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 ml-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 ml-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
          <div className="w-[80px] bg-primary-2 text-gray-700 p-2 ml-2 mb-2 text-sm text-center rounded-md">
            발라드
          </div>
        </div>
      </div>
      <div className="bg-primary-1 text-gray-700 p-2 w-full lg:w-80 text-center rounded-lg mt-10 self-center">
        회원가입
      </div>
    </div>
  );
};

export default SignupForm;
