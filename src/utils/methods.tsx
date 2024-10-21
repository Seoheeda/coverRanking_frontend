import { REGEX_PASS } from "./enum";

export const passwordRegexCheck = (password: string) => {
  
    if (REGEX_PASS.test(password)) {
        return true;
    } else {
        return false;
    }
}
