import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/imgs/profile.svg";
import axios from "axios";
import { GENRES } from '../utils/enum.tsx';

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
  const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>("");

  const genres = [
    "발라드",
    "K-POP",
    "랩/힙합",
    "인디",
    "트로트",
    "락",
    "R&B",
    "동요",
    "댄스",
    "기타"
  ];

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangePwdCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdCheck(e.target.value);
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const checkNickname = async () => {
    try {
      const response = await axios.post(
        "/members/check-nickname",
        {
          nickName: nickname,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.isExist === "true") {
        setNicknameIschecked(1);
      } else {
        setNicknameIschecked(2);
      }
    } catch (error) {
      alert("닉네임 확인에 실패했습니다.");
      console.error(error);
    }
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(Number(e.target.value));
    console.log(age);
  };

  const handleGenderChange = (value: number) => {
    setGender(value);
  };

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


  const toggleGenre = (index: number) => {
    const genre = GENRES[index]; 
    setPreferredGenre((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre) 
        : [...prev, genre] 
    );
    console.log(preferredGenre);
  };
  

  const submitForm = async () => {
    // 모든 값이 입력되었는지 확인
    if (!nickname || !email || !password || !age || !gender || !preferredGenre || !imgFile || emailIschecked !== 1 || nicknameIschecked !== 1) {
      alert("정보를 다시 확인해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        "/members",
        {
          nickName: nickname,
          email: email,
          password: password,
          nickname: nickname,
          age: age,
          gender: gender,
          preferredGenre: preferredGenre,
          image: imgFile,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response);
      // 메인 페이지로 이동
      navigate("/");

    } catch (error) {
      alert("닉네임 확인에 실패했습니다.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-[70%] min-w-[250px] m-auto border-2 border-gray-200 rounded-2xl px-4 py-7 sm:px-8 md:px-12">
      <div className="text-xl font-medium mb-10 self-center">회원가입</div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="flex-1 lg:pr-5">
          <div className="flex flex-row justify-between flex-wrap">
            <p className="mb-2 text-gray-500 font-semibold">이메일</p>
            {emailIschecked === 1 ? (
              <p className="mb-2 text-primary-1 text-[13px]">
                사용 가능한 이메일입니다.
              </p>
            ) : null}
            {emailIschecked === 2 ? (
              <p className="mb-2 text-red-500 text-[13px]">
                * 이미 가입된 이메일입니다.
              </p>
            ) : null}
          </div>
          <div className="flex flex-row">
            <input
              className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
              onChange={onChangeEmail}
            />
            <div
              className="w-[100px] min-w-[100px] bg-primary-2 text-gray-700 p-2 ml-2 text-sm text-center rounded-md cursor-pointer"
              onClick={checkEmail}
            >
              중복 확인
            </div>
          </div>
          <p className="mb-2 mt-7 text-gray-500 font-semibold">비밀번호</p>
          <div className="flex flex-row">
            <input
              type="password"
              className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
              onChange={onChangePassword}
            />
          </div>
          <div className="flex flex-row justify-between mt-7 flex-wrap">
            <p className="mb-2 text-gray-500 font-semibold">비밀번호 확인</p>
            {password === pwdCheck ? (
              <p className="mb-2 text-primary-1 text-[13px]">
                비밀번호가 일치합니다.
              </p>
            ) : (
              <p className="mb-2 text-red-500 text-[13px]">
                * 비밀번호가 일치하지 않습니다.
              </p>
            )}
          </div>{" "}
          <div className="flex flex-row">
            <input
              type="password"
              className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
              onChange={onChangePwdCheck}
            />
          </div>
        </div>
        <div className="flex-1 lg:pl-5 mt-8 lg:mt-0">
          <div className="flex flex-row justify-between">
            <p className="mb-2 text-gray-500 font-semibold">닉네임</p>
            {nicknameIschecked === 1 ? (
              <p className="mb-2 text-primary-1 text-[13px]">
                사용 가능한 닉네임입니다.
              </p>
            ) : null }
            {nicknameIschecked === 2 ?(
              <p className="mb-2 text-red-500 text-[13px]">
                * 닉네임을 사용할 수 없습니다.
              </p>
            ) : null}
          </div>{" "}
          <div className="flex flex-row">
            <input
              className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
              onChange={onChangeNickname}
            />
            <div
              className="w-[100px] min-w-[100px] bg-primary-2 text-gray-700 p-2 ml-2 text-sm text-center rounded-md cursor-pointer"
              onClick={checkNickname}
            >
              중복 확인
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start mt-7 ">
            <div className="flex-1">
              <p className="mb-2 text-gray-500 font-semibold">나이</p>
              <select
                className="w-[50%] h-9 px-3 py-1 border border-gray-2 rounded-md focus:outline-gray-2 text-center text-gray-500"
                onChange={onChangeAge}
              >
                <option value={0}>선택</option>
                {Array.from({ length: 88 }, (_, i) => i + 12).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
              <p className="mb-2 mt-7 text-gray-500 font-semibold">성별</p>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  defaultChecked
                  checked={gender === 0}
                  onChange={() => handleGenderChange(0)}
                />
                <div className="px-4 py-1 min-w-10 text-gray-700 ">남성</div>
                <input
                  type="radio"
                  name="gender"
                  checked={gender === 1}
                  onChange={() => handleGenderChange(1)}
                />
                <div className="px-4 py-1 text-gray-700">여성</div>
              </div>
            </div>
            <div className="flex flex-col items-center mr-8 pt-3 lg:mt-0">
              <img
                src={imgFile ? (imgFile as string) : Profile}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-6"
              />
              {imgFile ? 
              <label className="min-w-[100px] cursor-pointer bg-primary-2 text-gray-700 py-1 px-2 text-xs text-center rounded-md">
              이미지 변경
              <input
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={saveImgFile}
                className="hidden"
              />
            </label> :
             <label className="min-w-[100px] cursor-pointer bg-primary-2 text-gray-700 py-1 px-2 text-xs text-center rounded-md">
             이미지 업로드
             <input
               type="file"
               accept="image/*"
               ref={imgRef}
               onChange={saveImgFile}
               className="hidden"
             />
           </label> }
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-7 ">
        <p className="mb-2 text-gray-500 font-semibold">선호 장르</p>
        <div className="flex flex-wrap flex-row justify-center">
        {genres.map((genre, index) => (
          <div
            key={index}
            className={`w-[80px] p-2 ml-2 mr-2 mb-2 text-sm text-center rounded-md cursor-pointer ${
              preferredGenre.includes(GENRES[index]) 
                ? "bg-primary-2 border border-gray-2"
                : "bg-white border border-gray-2"
            } text-gray-700`}
            onClick={() => toggleGenre(index)}
          >
            {genre}
          </div>
        ))}

        </div>
      </div>
      <div 
        className="bg-primary-1 text-gray-700 p-2 w-full lg:w-80 text-center rounded-lg mt-10 self-center cursor-pointer"
        onClick={submitForm}
        >
        회원가입
      </div>
    </div>
  );
};

export default SignupForm;
