import React, { useState, useRef } from "react";
import Profile from "../../assets/imgs/profile.svg";

interface ImageUploadProps {
  imgFile: File | null;
  setImgFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const ImageInput: React.FC<ImageUploadProps> = ({ imgFile, setImgFile }) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const saveImgFile = () => {
    if (imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];
      setImgFile(file); 
      
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImg(reader.result as string);
      };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center lg:mr-8 md:mr-8 pt-10">
      <img
        src={previewImg ? previewImg : Profile}
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
        <label className="min-w-[100px] cursor-pointer bg-primary-2 text-gray-700 py-1 px-2 text-xs text-center rounded-md hover:opacity-70">
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
