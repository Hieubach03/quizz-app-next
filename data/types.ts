import { StaticImageData } from "next/image";

export interface Question {
  id: string;
  text: string;
  image?: string | StaticImageData;
  options: string[];
  correctIndex: number;
}

export interface Chapter {
  id: string;
  title: string;
  image?: string | StaticImageData;
  subjectId: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  title: string;
  chapters: Chapter[];
}
