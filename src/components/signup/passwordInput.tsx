import React from "react";

interface PasswordInputProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  pwdCheck: string;
  setPwdCheck: React.Dispatch<React.SetStateAction<string>>;
}

const passwordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
  pwdCheck,
  setPwdCheck,
}) => {
  return (
    <div className="mt-7">
      <p className="mb-2 text-gray-500 font-semibold">비밀번호</p>
      <input
        type="password"
        className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-row justify-between mt-7 flex-wrap">
        <p className="mb-2 text-gray-500 font-semibold">비밀번호 확인</p>
        {password === pwdCheck ? (
          <p className="mb-2 text-primary-1 text-[13px]">비밀번호가 일치합니다.</p>
        ) : (
          <p className="mb-2 text-red-500 text-[13px]">* 비밀번호가 일치하지 않습니다.</p>
        )}
      </div>
      <input
        type="password"
        className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
        onChange={(e) => setPwdCheck(e.target.value)}
      />
    </div>
  );
};

export default passwordInput;
