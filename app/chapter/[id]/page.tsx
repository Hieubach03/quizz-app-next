"use client";

import { useParams, useRouter } from "next/navigation";
import QuestionCard from "@/components/QuestionCard";
import { useState, useEffect, useRef } from "react";
import { subjects } from "@/data/subjects";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUp, Menu, X } from "lucide-react";

export default function ChapterPage() {
  const { id } = useParams();
  const router = useRouter();

  const subject = subjects.find((s) => s.chapters.some((c) => c.id === id));
  const chapter = subject?.chapters.find((c) => c.id === id);

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [answeredStatus, setAnsweredStatus] = useState<boolean[]>([]);
  const [showScroll, setShowScroll] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // trạng thái drawer

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (chapter) {
      setAnsweredStatus(Array(chapter.questions.length).fill(false));
    }
  }, [chapter]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!chapter) return <div className="p-6 text-black">Loading...</div>;

  const handleAnswer = (index: number, correct: boolean) => {
    setAnswered((prev) => prev + 1);
    if (correct) setScore((prev) => prev + 1);

    setAnsweredStatus((prev) => {
      const newStatus = [...prev];
      newStatus[index] = true;
      return newStatus;
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-black relative">
      {/* Header cố định */}
      <div className="sticky top-0 z-50 md:px-[30%] bg-gray-50 flex items-center justify-between p-4 px-5 shadow">
        {/* Left side: back mobile */}
        <button
          onClick={() => subject && router.push(`/subject/${subject.id}`)}
          className="flex md:hidden items-center justify-center p-2 bg-blue-600 text-white rounded-md"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Center + Left on desktop */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold">{chapter.title}</h2>
          <p>
            Số câu: {chapter.questions.length} | Điểm: {score}
          </p>
        </div>

        {/* Nút mở drawer (mobile) */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex md:hidden items-center justify-center p-2 bg-blue-600 text-white rounded-md"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Right side: back desktop */}
        <button
          onClick={() => subject && router.push(`/subject/${subject.id}`)}
          className="hidden md:flex items-center gap-1 hover:underline text-black ml-4"
        >
          ← Quay lại
        </button>
      </div>

      <div className="max-w-3xl mx-auto mt-4">
        {/* Thanh số câu (desktop) */}
        <div className="hidden md:fixed md:top-32 md:right-6 md:grid md:grid-cols-11 md:gap-2 md:z-50">
          {chapter.questions.map((_, i) => (
            <button
              key={i}
              onClick={() =>
                questionRefs.current[i]?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-10 h-10 rounded-md font-bold ${
                answeredStatus[i]
                  ? "border-green-500 border bg-green-50 shadow-green-200"
                  : "border-red-500 border bg-red-50 shadow-red-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Drawer (mobile) cố định */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 p-4 overflow-auto"
            >
              <button
                onClick={() => setDrawerOpen(false)}
                className="mb-4 text-black hover:underline hover:bg-red-300 rounded-full p-2"
              >
                <X />
              </button>
              <div className="grid grid-cols-5 gap-2">
                {chapter.questions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      questionRefs.current[i]?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setDrawerOpen(false);
                    }}
                    className={`w-10 h-10 rounded-md font-bold ${
                      answeredStatus[i]
                        ? "border-green-500 border bg-green-50 shadow-green-200"
                        : "border-red-500 border bg-red-50 shadow-red-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nội dung câu hỏi scroll riêng */}
        <div className="space-y-4 mt-4 mx-5 md:mx-0">
          {chapter.questions.map((q, i) => (
            <div
              ref={(el) => {
                questionRefs.current[i] = el;
              }}
              key={q.id}
            >
              <QuestionCard
                q={q}
                onAnswer={(correct) => handleAnswer(i, correct)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nút Scroll lên đầu */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
