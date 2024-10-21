import { REGEX_PASS } from "./enum.tsx";

export const passwordRegexCheck = (password: string) => {
  
    if (REGEX_PASS.test(password)) {
        return true;
    } else {
        return false;
    }
}
