"use client";

import Link from "next/link";
import { subjects } from "@/data/subjects";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 p-6 text-black">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          📚 Web Trắc Nghiệm - Chọn môn học
        </motion.h1>

        <div className="grid grid-cols-1 gap-6">
          {subjects.map((subject, i) => (
            <Link key={subject.id} href={`/subject/${subject.id}`}>
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
                  {subject.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {subject.chapters.length} chương
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
