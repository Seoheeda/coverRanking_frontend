import { httpClient } from "./http.ts";

export const checkEmail = async (email: string) => {
    const data = await httpClient.put(`/members/check-email`, {
        email: email,
    });
    return data;
};

export const checkNickname = async (nickname: string) => {
    const data = await httpClient.put(`/members/check-nickname`, {
        nickname: nickname,
    });
    return data;
};