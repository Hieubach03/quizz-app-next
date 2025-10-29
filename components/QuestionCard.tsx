"use client";

import { useState } from "react";
import { Question } from "@/data/questions";

export default function QuestionCard({
  q,
  onAnswer,
}: {
  q: Question;
  onAnswer?: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);

  function handleChoose(idx: number) {
    if (locked) return;
    setSelected(idx);
    setLocked(true);
    const correct = idx === q.correctIndex;
    onAnswer?.(correct);
  }

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm text-black">
      <div className="font-medium mb-3">{q.text}</div>

      <div className="space-y-2">
        {q.options.map((opt, idx) => {
          const isSelected = selected === idx;
          const isCorrect = q.correctIndex === idx;
          let base =
            "flex items-center p-3 rounded-md border cursor-pointer transition text-black";

          if (!locked) {
            base += " hover:bg-gray-50";
          } else {
            if (isCorrect) base += " border-green-500 bg-green-50";
            else if (isSelected && !isCorrect)
              base += " border-red-500 bg-red-50 opacity-90";
            else base += " opacity-70";
          }

          return (
            <div
              key={idx}
              className={base}
              onClick={() => handleChoose(idx)}
            >
              <div className="mr-3 font-semibold">
                {String.fromCharCode(65 + idx)}.
              </div>
              <div>{opt}</div>
              {locked && isCorrect && (
                <div className="ml-auto text-green-600 font-medium">✔</div>
              )}
              {locked && isSelected && !isCorrect && (
                <div className="ml-auto text-red-600 font-medium">✖</div>
              )}
            </div>
          );
        })}
      </div>

      {locked && selected !== q.correctIndex && (
        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-300 rounded text-black">
          <div className="text-sm">
            Đáp án đúng:{" "}
            <strong>
              {String.fromCharCode(65 + q.correctIndex)}.{" "}
              {q.options[q.correctIndex]}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
}
