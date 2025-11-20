import { chapter1 } from "./oto-english/chapter1";
import { chapter2 } from "./oto-english/chapter2";
import { chapter3 } from "./oto-english/chapter3";
import { chapter4 } from "./oto-english/chapter4";
import { chapter5 } from "./oto-english/chapter5";
import { chapter6 } from "./oto-english/chapter6";
import { chapter7 } from "./oto-english/chapter7";
import { chapter1_1 } from "./oto-english-2/chapter1_1";
import { chapter1_2 } from "./oto-english-2/chapter1_2";

export const subjects = [
  {
    id: "oto-english",
    title: "Tiếng Anh chuyên ngành Ô tô",
    chapters: [
      chapter1,
      chapter2,
      chapter3,
      chapter4,
      chapter5,
      chapter6,
      chapter7,
    ],
  },
  {
    id: "oto-english-2",
    title: "Tiếng Anh chuyên ngành Ô tô 2",
    chapters: [chapter1_1, chapter1_2],
  },
];
