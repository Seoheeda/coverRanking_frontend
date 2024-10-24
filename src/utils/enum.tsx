export const GENRES: string[] = [
    'BALLAD',
    'KPOP',
    'RAP',
    'INDIE',
    'TEUROTEU',
    'ROCK',
    'RANDB',
    'CHILDREN',
    'DANCE',
    'ETC',
];

export const GENRES_KOR: string[] = [
    "발라드",
    "K-POP",
    "랩/힙합",
    "인디",
    "트로트",
    "락",
    "R&B",
    "동요",
    "댄스",
    "기타"
];

export const REGEX_PASS = new RegExp("^(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()-+=<>?]).{8,20}$");

export const REGEX_NICK = new RegExp("^[^\\s]{2,15}$");

export const GENDER: string[] = [
    "MALE",
    "FEMALE",
];
