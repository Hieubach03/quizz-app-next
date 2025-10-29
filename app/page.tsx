import Link from "next/link";
import { chapters } from "@/data/questions";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 text-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Web Trắc Nghiệm - Ôn tập tiếng Anh chuyên ngành ô tô
        </h1>

        <div className="grid grid-cols-1 gap-y-10">
          {chapters.map((chapter) => (
            <Link key={chapter.id} href={`/chapter/${chapter.id}`}>
              <div className="p-4 bg-white rounded-lg border shadow hover:shadow-md cursor-pointer transition text-black">
                <h2 className="font-semibold text-lg">{chapter.title}</h2>
                <p className="text-sm text-black">
                  {chapter.questions.length} câu hỏi
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
