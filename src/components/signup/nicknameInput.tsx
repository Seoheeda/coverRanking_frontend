import React from "react";
import { checkNickname } from "../../api/auth";
import { nicknameRegexCheck } from "../../utils/methods";

interface NicknameInputProps {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  setNicknameIschecked: React.Dispatch<React.SetStateAction<number>>;
  nicknameIschecked: number;
}

const NicknameInput: React.FC<NicknameInputProps> = ({
  nickname,
  setNickname,
  setNicknameIschecked,
  nicknameIschecked,
}) => {
  const submitCheckNickname = async () => {
    try {
      if (nicknameRegexCheck(nickname)) {
        const response = await checkNickname(nickname);

        console.log(response.data);

        if (response.data.isExist === false) {
          setNicknameIschecked(1);
        } else {
          setNicknameIschecked(2);
        }
      } else {
        alert("닉네임은 2~15자로 설정해주세요.");
      }
    } catch (error) {
      alert("이메일 확인에 실패했습니다.");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between flex-wrap">
        <p className="mb-2 text-gray-500 font-semibold">닉네임</p>
        {nicknameIschecked === 1 && (
          <p className="mb-2 text-primary-1 text-[13px]">
            사용 가능한 닉네임입니다.
          </p>
        )}
        {nicknameIschecked === 2 && (
          <p className="mb-2 text-red-500 text-[13px]">
            * 닉네임을 사용할 수 없습니다.
          </p>
        )}
      </div>
      <div className="flex flex-row">
        <input
          className="w-full h-9 px-3 bg-gray-1 border border-gray-2 rounded-md focus:outline-gray-2"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div
          className="w-[100px] min-w-[100px] bg-primary-2 text-gray-700 p-2 ml-2 text-sm text-center rounded-md cursor-pointer hover:opacity-70"
          onClick={submitCheckNickname}
        >
          중복 확인
        </div>
      </div>
    </div>
  );
};

export default NicknameInput;
