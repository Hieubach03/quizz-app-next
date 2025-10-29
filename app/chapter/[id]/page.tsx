"use client";

import { useParams, useRouter } from "next/navigation";
import { chapters } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import { useState } from "react";

export default function ChapterPage() {
  const { id } = useParams();
  const router = useRouter();

  const chapter = chapters.find((c) => c.id === id);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  if (!chapter) return <div className="p-6 text-black">Loading...</div>;

  const handleAnswer = (correct: boolean) => {
    setAnswered((prev) => prev + 1);
    if (correct) setScore((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">{chapter.title}</h2>
            <p>
              Số câu: {chapter.questions.length} | Điểm: {score}
            </p>
          </div>
          <button
            onClick={() => router.push("/")}
            className="hover:underline text-black"
          >
            ← Quay lại
          </button>
        </div>

        <div className="space-y-4">
          {chapter.questions.map((q) => (
            <QuestionCard key={q.id} q={q} onAnswer={handleAnswer} />
          ))}
        </div>
      </div>
    </main>
  );
}
