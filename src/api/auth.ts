import { httpClient } from "./http";
import { GENDER } from "../utils/enum";

export const checkEmail = async (email: string) => {
    const data = await httpClient.post(`/members/check-email`, {
        email: email,
    });

    console.log(data);
    return data;
};

export const checkNickname = async (nickname: string) => {
    const data = await httpClient.post(`/members/check-nickname`, {
        nickname: nickname,
    });
    return data;
};

export const submitSignup = async (email: string, password: string, nickname: string, age: number, gender: number, preferredGenre: string[], imgFile: File | null) => {
    const formData = new FormData();

    const member = {
        email: email,
        password: password,
        nickname: nickname,
        age: age,
        gender: GENDER[gender],
        preferredGenre: preferredGenre,
    };
    
    formData.append('member', new Blob([JSON.stringify(member)], { type: 'application/json' }));
     
    if (imgFile) {
        console.log(imgFile);
        formData.append('image', imgFile); 
    }

    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }    
    
    const data = await httpClient.post(`/members`, formData);

    return data;
};
