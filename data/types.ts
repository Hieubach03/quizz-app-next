export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface Chapter {
  id: string;
  title: string;
  questions: Question[];
}
