import React, {useEffect, useState} from "react";
import { passwordRegexCheck } from "../../utils/methods";

interface PasswordInputProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  pwdCheck: string;
  setPwdCheck: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
  pwdCheck,
  setPwdCheck,
}) => {

  const [passwordChecked, setPasswordChecked] = useState<number>(0);
  const [samePasswordChecked, setSamePasswordChecked] = useState<number>(0);

  useEffect(() => {
    if (password.length === 0) {
      setPasswordChecked(0);
    } else if (passwordRegexCheck(password)) {
      setPasswordChecked(1);
    } else {
      setPasswordChecked(2);
    }
  }, [password]);

  useEffect(() => {
    
    if (pwdCheck.length === 0) {
      setSamePasswordChecked(0);
    } else if (password === pwdCheck) {
      setSamePasswordChecked(1);
    } else {
      setSamePasswordChecked(2);
    }
  }, [pwdCheck, password]);


  return (
    <div className="mt-7">
      <div className="flex flex-row justify-between mt-7 flex-wrap">
        <p className="mb-2 text-gray-500 font-semibold">비밀번호</p>
        {passwordChecked === 1 ? (
          <p className="mb-2 text-primary-1 text-[13px]">
            사용 가능한 비밀번호 입니다.
          </p>
        ) : passwordChecked === 2 ? (
          <p className="mb-2 text-red-500 text-[13px]">
            * 소문자, 숫자, 특수문자 포함 8~20자로 입력하세요.
          </p>
        ) : null}
      </div>
      <input
        type="password"
        className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-row justify-between mt-7 flex-wrap">
        <p className="mb-2 text-gray-500 font-semibold">비밀번호 확인</p>
        {samePasswordChecked === 1 ? (
          <p className="mb-2 text-primary-1 text-[13px]">
            비밀번호가 일치합니다.
          </p>
        ) : samePasswordChecked === 2 ? (
          <p className="mb-2 text-red-500 text-[13px]">
            * 비밀번호가 일치하지 않습니다.
          </p>
        ) : null}
      </div>
      <input
        type="password"
        className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
        onChange={(e) => setPwdCheck(e.target.value)}
      />
    </div>
  );
};

export default PasswordInput;
