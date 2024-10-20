import React from "react";
import axios from "axios";

interface EmailInputProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setEmailIschecked: React.Dispatch<React.SetStateAction<number>>;
  emailIschecked: number;
}

const emailInput: React.FC<EmailInputProps> = ({
  email,
  setEmail,
  setEmailIschecked,
  emailIschecked,
}) => {
  const checkEmail = async () => {
    try {
      const response = await axios.post(
        "/members/check-email",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.isExist === "true") {
        setEmailIschecked(1);
      } else {
        setEmailIschecked(2);
      }
    } catch (error) {
      alert("이메일 확인에 실패했습니다.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col">
      <p className="mb-2 text-gray-500 font-semibold">이메일</p>
      {emailIschecked === 1 && (
        <p className="mb-2 text-primary-1 text-[13px]">사용 가능한 이메일입니다.</p>
      )}
      {emailIschecked === 2 && (
        <p className="mb-2 text-red-500 text-[13px]">* 이미 가입된 이메일입니다.</p>
      )}
      <div className="flex flex-row">
        <input
          className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          className="w-[100px] min-w-[100px] bg-primary-2 text-gray-700 p-2 ml-2 text-sm text-center rounded-md cursor-pointer"
          onClick={checkEmail}
        >
          중복 확인
        </div>
      </div>
    </div>
  );
};

export default emailInput;
