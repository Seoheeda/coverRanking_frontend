import { httpClient } from "./http.ts";

export const checkEmail = async (email: string) => {
    const data = await httpClient.post(`/members/check-email`, {
        email: email,
    });
    return data;
};

export const checkNickname = async (nickname: string) => {
    const data = await httpClient.post(`/members/check-nickname`, {
        nickname: nickname,
    });
    return data;
};