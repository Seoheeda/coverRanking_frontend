import React from "react";

const SignupForm = () => {
  return (
    <div className="flex flex-col border-2 border-gray-200 rounded-2xl p-5 items-center justify-center">
      <p className="text-xl font-medium mb-4">회원가입</p>
      <div className="w-full flex flex-row">
        <div className="w-[50%]">
          <p>이메일</p>
        </div>
        <div className="w-[50%]">
          <p>닉네임</p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
