import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmailInput from "./emailInput";
import PasswordInput from "./passwordInput";
import NicknameInput from "./nicknameInput";
import AgeGenderInput from "./ageGenderInput";
import GenreSelector from "./genreInput";
import ImageUpload from "./imageInput";
import { submitSignup } from "../../api/auth";

const SignupForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [emailIschecked, setEmailIschecked] = useState<number>(0);
  const [password, setPassword] = useState<string>("1");
  const [pwdCheck, setPwdCheck] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [nicknameIschecked, setNicknameIschecked] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<number>(0);
  const [preferredGenre, setPreferredGenre] = useState<string[]>([]);
  const [imgFile, setImgFile] = useState<File | null>(null);

  const submitForm = async () => {
    // 모든 값이 입력되었는지 확인
    if (
      !nickname ||
      !email ||
      !password ||
      !age ||
      !gender ||
      !preferredGenre ||
      !imgFile ||
      emailIschecked !== 1 ||
      nicknameIschecked !== 1
    ) {
      alert("정보를 다시 확인해주세요.");
      return;
    }
    try {
      const response = await submitSignup(email, password, nickname, age, gender, preferredGenre, imgFile);

      console.log(response);
      // 메인 페이지로 이동
      navigate("/");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-[85%] lg:w-[70%] min-w-[250px] m-auto border-2 border-gray-200 rounded-2xl px-4 py-7 sm:px-8 md:px-12">
      <div className="text-xl font-medium mb-10 self-center">회원가입</div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="flex-1 lg:pr-5">
          <EmailInput
            email={email}
            setEmail={setEmail}
            setEmailIschecked={setEmailIschecked}
            emailIschecked={emailIschecked}
          />
          <PasswordInput
            password={password}
            setPassword={setPassword}
            pwdCheck={pwdCheck}
            setPwdCheck={setPwdCheck}
          />
        </div>
        <div className="flex-1 lg:pl-5 mt-8 lg:mt-0">
          <NicknameInput
            nickname={nickname}
            setNickname={setNickname}
            setNicknameIschecked={setNicknameIschecked}
            nicknameIschecked={nicknameIschecked}
          />
          <div className="flex flex-col sm:flex-row">
            <AgeGenderInput
              age={age}
              setAge={setAge}
              gender={gender}
              setGender={setGender}
            />
            <ImageUpload imgFile={imgFile} setImgFile={setImgFile} />
          </div>
        </div>
      </div>
      <GenreSelector
        preferredGenre={preferredGenre}
        setPreferredGenre={setPreferredGenre}
      />
      <div
        className="bg-primary-1 text-gray-700 p-2 w-full lg:w-80 text-center rounded-lg mt-10 self-center cursor-pointer hover:opacity-90"
        onClick={submitForm}
      >
        회원가입
      </div>
    </div>
  );
};

export default SignupForm;
