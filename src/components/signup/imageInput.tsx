import React, { useRef } from "react";
import Profile from "../../assets/imgs/profile.svg";

interface ImageUploadProps {
  imgFile: string | ArrayBuffer | null;
  setImgFile: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
}

const ImageInput: React.FC<ImageUploadProps> = ({ imgFile, setImgFile }) => {
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

  return (
    <div className="flex flex-col items-center justify-center lg:mr-8 md:mr-8 pt-10">
      <img
        src={imgFile ? (imgFile as string) : Profile}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-6"
      />
      {imgFile ? (
        <label className="min-w-[100px] cursor-pointer bg-primary-2 text-gray-700 py-1 px-2 text-xs text-center rounded-md">
          이미지 변경
          <input
            type="file"
            accept="image/*"
            ref={imgRef}
            onChange={saveImgFile}
            className="hidden"
          />
        </label>
      ) : (
        <label className="min-w-[100px] cursor-pointer bg-primary-2 text-gray-700 py-1 px-2 text-xs text-center rounded-md">
          이미지 업로드
          <input
            type="file"
            accept="image/*"
            ref={imgRef}
            onChange={saveImgFile}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default ImageInput;
