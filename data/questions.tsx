import { chapter1 } from "./oto-english/chapter1";
import { chapter2 } from "./oto-english/chapter2";
import { chapter3 } from "./oto-english/chapter3";
import { chapter4 } from "./oto-english/chapter4";
import { chapter5 } from "./oto-english/chapter5";
import { chapter6 } from "./oto-english/chapter6";
import { chapter7 } from "./oto-english/chapter7";
import { Chapter } from "./types";
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}
export const chapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
];
