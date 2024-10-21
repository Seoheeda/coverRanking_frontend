import { REGEX_PASS, REGEX_NICK } from "./enum";

export const passwordRegexCheck = (password: string) => {
  
    if (REGEX_PASS.test(password)) {
        return true;
    } else {
        return false;
    }
}

export const nicknameRegexCheck = (nickname: string) => {
  
    if (REGEX_NICK.test(nickname)) {
        return true;
    } else {
        return false;
    }
}

