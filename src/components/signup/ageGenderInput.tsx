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

    const onChangeAge = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAge(Number(e.target.value));
        console.log(age);
    };

    const handleGenderChange = (value: number) => {
        console.log(gender);
        setGender(value);
    };

    return (
        <div className="flex-1 sm:flex flex-col mt-7">
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
        <p className="mb-2 text-gray-500 font-semibold mt-7">성별</p>
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
    );
    };

    export default ageGenderInput;
