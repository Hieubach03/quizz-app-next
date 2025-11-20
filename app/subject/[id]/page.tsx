"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { subjects } from "@/data/subjects";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function SubjectPage() {
  const router = useRouter();
  const params = useParams();
  const subject = subjects.find((s) => s.id === params?.id);

  if (!subject)
    return <div className="p-6 text-center">Không tìm thấy môn học</div>;

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 p-6 text-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10 relative">
          {/* Nút Back Mobile */}
          <button
            onClick={() => subject && router.push(`/`)}
            className="flex md:hidden items-center justify-center p-2 bg-blue-600 text-white rounded-md"
          >
            <ArrowLeft />
          </button>

          {/* Tiêu đề căn giữa tuyệt đối */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 text-xl md:text-3xl font-bold text-center"
          >
            {subject.title}
          </motion.h1>

          {/* Nút Back Desktop */}
          <button
            onClick={() => router.push("/")}
            className="hidden md:flex items-center gap-1 hover:underline text-black"
          >
            ← Quay lại
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {subject.chapters.map((chapter, i) => (
            <Link key={chapter.id} href={`/chapter/${chapter.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.97 }}
                className="p-5 bg-white rounded-2xl border shadow-sm cursor-pointer transition-all"
              >
                <h2 className="font-semibold text-lg text-gray-800">
                  {chapter.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {chapter.questions.length} câu hỏi
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
