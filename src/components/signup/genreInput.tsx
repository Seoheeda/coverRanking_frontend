import React from "react";
import { GENRES, GENRES_KOR } from "../../utils/enum";

interface GenreSelectorProps {
  preferredGenre: string[];
  setPreferredGenre: React.Dispatch<React.SetStateAction<string[]>>;
}

const GenreInput: React.FC<GenreSelectorProps> = ({
  preferredGenre,
  setPreferredGenre,
}) => {
    const toggleGenre = (index: number) => {
        const genre = GENRES[index]; 
        setPreferredGenre((prev) =>
          prev.includes(genre)
            ? prev.filter((g) => g !== genre) 
            : [...prev, genre] 
        );
        console.log(preferredGenre);
      };

  return (
    <div className="flex-1 flex-col mt-7">
        <p className="mb-2 text-gray-500 font-semibold">선호 장르</p>
        <div className="flex flex-wrap flex-row justify-center">
        {GENRES_KOR.map((genre, index) => (
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
  );
};

export default GenreInput;
