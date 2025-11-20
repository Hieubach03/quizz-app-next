"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Question } from "@/data/questions";

export default function QuestionCard({
  q,
  onAnswer,
}: {
  q: Question & { image?: string | StaticImageData };
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 border rounded-2xl bg-white shadow-md text-black"
    >
      <div className="font-semibold mb-4 text-lg">{q.text}</div>

      {/* Hiển thị ảnh nếu có */}
      {q.image && (
        <div className="relative w-full h-80 mb-10">
          <Image
            src={q.image}
            alt={q.text}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      )}

      <div className="space-y-3">
        {q.options.map((opt, idx) => {
          const isSelected = selected === idx;
          const isCorrect = q.correctIndex === idx;

          let base =
            "flex items-center p-3 rounded-xl border cursor-pointer transition-all text-black";

          if (!locked) {
            base += " hover:bg-gray-50 hover:shadow-sm";
          } else {
            if (isCorrect)
              base += " border-green-500 bg-green-50 shadow-green-200";
            else if (isSelected && !isCorrect)
              base += " border-red-500 bg-red-50 shadow-red-200";
            else base += " opacity-70";
          }

          return (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.97 }}
              animate={
                locked && isSelected
                  ? { scale: [1, 1.05, 1], transition: { duration: 0.3 } }
                  : {}
              }
              className={base}
              onClick={() => handleChoose(idx)}
            >
              <div className="mr-3 font-semibold text-gray-700">
                {String.fromCharCode(65 + idx)}.
              </div>
              <div className="flex-1">{opt}</div>
              <AnimatePresence>
                {locked && isCorrect && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-auto text-green-600 font-medium"
                  >
                    ✔
                  </motion.div>
                )}
                {locked && isSelected && !isCorrect && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-auto text-red-600 font-medium"
                  >
                    ✖
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {locked && selected !== q.correctIndex && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-3 bg-yellow-50 border border-yellow-300 rounded-lg text-black"
          >
            <div className="text-sm">
              Đáp án đúng:{" "}
              <strong>
                {String.fromCharCode(65 + q.correctIndex)}.{" "}
                {q.options[q.correctIndex]}
              </strong>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
