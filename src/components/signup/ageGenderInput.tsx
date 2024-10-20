import React from "react";

interface AgeGenderInputProps {
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  gender: number;
  setGender: React.Dispatch<React.SetStateAction<number>>;
}

const ageGenderInput: React.FC<AgeGenderInputProps> = ({
  age,
  setAge,
  gender,
  setGender,
    }) => {

    const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const birth: Date = new Date(e.target.value);
        const birthYear: number = birth.getFullYear();
        const ageCal: number = year - birthYear + 1;
        setAge(ageCal);
    };

    const onGenderChange = (value: number) => {
        console.log(gender);
        setGender(value);
    };

    return (
        <div className="flex-1 sm:flex flex-col mt-7">
        <p className="mb-2 text-gray-500 font-semibold">생년월일</p>
        <input
            type="date"
            className="w-[70%] border border-gray-2 h-9 px-3 rounded-md"
            onChange={onChangeAge}
        />
        <p className="mb-2 text-gray-500 font-semibold mt-7">성별</p>
        <div className="flex items-center">
            <input
            type="radio"
            name="gender"
            defaultChecked
            checked={gender === 0}
            onChange={() => onGenderChange(0)}
            />
            <div className="px-4 py-1 min-w-10 text-gray-700 ">남성</div>
            <input
            type="radio"
            name="gender"
            checked={gender === 1}
            onChange={() => onGenderChange(1)}
            />
            <div className="px-4 py-1 text-gray-700">여성</div>
        </div>
        </div>
    );
    };

    export default ageGenderInput;
