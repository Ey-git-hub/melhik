"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  CalendarDays,
  Clock,
  ArrowRight,
  Check,
  Star,
  Users,
  Video,
  FileText,
  ChevronRight,
  Menu,
  X,
  Send,
  MessageSquare,
} from "lucide-react";
import {
  studentStats,
  upcomingLessonsData,
  recommendedTutorsData,
  currentLearningThread,
} from "@/app/lib/mock-data";
import InteractiveLearningThread from "@/app/components/interactive-learning-thread";

export default function StudentPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [classroomOpen, setClassroomOpen] = useState(false);
  const [practiceAnswer, setPracticeAnswer] = useState("");
  const [practiceFeedback, setPracticeFeedback] = useState<string | null>(null);

  const handlePracticeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = practiceAnswer.replace(/\s+/g, "").toLowerCase();
    if (clean === "(x+3)(x+4)" || clean === "(x+4)(x+3)") {
      setPracticeFeedback("🎉 Outstanding! (x + 3)(x + 4) is exact! Roots are x = -3 and x = -4.");
    } else {
      setPracticeFeedback("Close! Look for two numbers that add to 7 and multiply to 12. Try 3 and 4: (x + 3)(x + 4).");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8f4] text-[#1e2520]">
      {/* Sidebar for Desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-[#e3e6dc] bg-[#fffefa] px-5 py-6 transition-transform lg:translate-x-0 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1a211c] text-sm font-extrabold text-[#c9f35b]">
              m
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#1c231e]">
                melhik
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1e7a4d]">
                Student Space
              </span>
            </div>
          </Link>
          <button
            onClick={() => setMobileNavOpen(false)}
            className="rounded-lg p-1 text-[#8f9689] lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex-1">
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#919a8d]">
            Learning Workspace
          </p>
          <nav className="mt-3 space-y-1">
            <Link
              href="/student"
              className="flex items-center gap-3 rounded-xl bg-[#1b221d] px-3 py-2.5 text-xs font-bold text-[#c9f35b] shadow-sm"
            >
              <BookOpen className="h-4 w-4" />
              <span>Overview & Threads</span>
            </Link>

            <Link
              href="/ask"
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-bold text-[#535d4f] hover:bg-[#eef2e6] hover:text-[#1c221e]"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#8cbd22]" />
                <span>Ask a Question</span>
              </div>
              <span className="rounded-full bg-[#c9f35b] px-2 py-0.5 text-[9px] font-black text-[#1b221d]">
                New
              </span>
            </Link>

            <a
              href="#upcoming"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-[#535d4f] hover:bg-[#eef2e6] hover:text-[#1c221e]"
            >
              <CalendarDays className="h-4 w-4" />
              <span>Upcoming Lessons</span>
            </a>

            <a
              href="#tutors"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-[#535d4f] hover:bg-[#eef2e6] hover:text-[#1c221e]"
            >
              <Users className="h-4 w-4" />
              <span>My Tutors</span>
            </a>
          </nav>

          {/* Quick links to Parent & Admin */}
          <div className="mt-8 rounded-2xl border border-[#dfe4d8] bg-[#f8faf3] p-3.5">
            <p className="text-[11px] font-bold text-[#2d352b]">Switch view</p>
            <div className="mt-2 space-y-1.5">
              <Link
                href="/parent"
                className="flex items-center justify-between rounded-lg px-2 py-1 text-xs text-[#525b4e] hover:bg-[#ebf0e3]"
              >
                <span>Parent Dashboard</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
              <Link
                href="/admin"
                className="flex items-center justify-between rounded-lg px-2 py-1 text-xs text-[#525b4e] hover:bg-[#ebf0e3]"
              >
                <span>Admin Dashboard</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="border-t border-[#e5e8de] pt-4">
          <div className="flex items-center gap-3 px-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1b221d] text-xs font-bold text-[#c9f35b]">
              JD
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-[#1f2620]">Jordan Davis</p>
              <p className="truncate text-[11px] text-[#788072]">10th Grade · Algebra II</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-20 flex h-[74px] items-center justify-between border-b border-[#e3e6dc] bg-[#fffefa]/90 px-5 backdrop-blur-md sm:px-8">
          <button
            onClick={() => setMobileNavOpen(true)}
            className="rounded-lg p-2 text-[#576053] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Quick Search or Greeting */}
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#e8f6ec] px-3 py-1 text-xs font-bold text-[#1b6b45]">
              🔥 12-Day Streak Active
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/ask"
              className="flex items-center gap-2 rounded-full bg-[#c9f35b] px-4 py-2 text-xs font-bold text-[#1b221d] shadow-xs hover:scale-105 transition-transform"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ask a Question</span>
            </Link>

            <Link
              href="/"
              className="rounded-full border border-[#d2d7c9] px-3 py-1.5 text-xs font-bold text-[#2a3229] hover:bg-[#eef2e6]"
            >
              Back to Home
            </Link>
          </div>
        </header>

        {/* Student Content Body */}
        <main className="mx-auto max-w-[1400px] p-5 sm:p-8 lg:p-10">
          {/* Hero Greeting */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#868f80]">
                Hey Jordan, what&apos;s the sticky bit?
              </span>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1a211c] sm:text-3xl">
                Your Learning Space
              </h1>
              <p className="mt-1 text-xs text-[#6e7668]">
                Review saved explanations, take your next practice step, or join today&apos;s session with Maya.
              </p>
            </div>

            {/* Quick Action to Book */}
            <button
              onClick={() => setClassroomOpen(true)}
              className="flex items-center gap-2 rounded-2xl bg-[#1b221d] px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#2c372f]"
            >
              <Video className="h-4 w-4 text-[#c9f35b]" />
              <span>Join Maya&apos;s Room (02:30 PM)</span>
            </button>
          </div>

          {/* Student Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {studentStats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#dfe2d7] bg-[#fffefa] p-5 shadow-[0_4px_16px_rgba(20,25,18,0.02)]"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-[#767e71]">
                  <span>{stat.label}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      stat.tone === "mint"
                        ? "bg-[#65c798]"
                        : stat.tone === "lavender"
                        ? "bg-[#9b8ae0]"
                        : stat.tone === "peach"
                        ? "bg-[#f59e66]"
                        : "bg-[#64b5f6]"
                    }`}
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="text-2xl font-extrabold tracking-tight text-[#1b221d]">
                    {stat.value}
                  </p>
                  <span className="text-[11px] font-bold text-[#2e8258]">
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Grid: Active Learning Thread (Figma centerpiece) & Upcoming lessons */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            {/* Left: Interactive Learning Thread Showcase */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-bold text-[#1a211c]">Active Learning Thread</h2>
                <span className="text-xs font-semibold text-[#666f60]">Yesterday&apos;s session recap</span>
              </div>
              <InteractiveLearningThread />

              {/* Extra Practice Card */}
              <div className="mt-6 rounded-3xl border border-[#dce1d5] bg-[#fffefa] p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#8ebd22]" />
                  <h3 className="text-sm font-bold text-[#1b221d]">
                    Quick Practice: Factoring Polynomials
                  </h3>
                </div>
                <p className="mt-1 text-xs text-[#6e7769]">
                  Type your factored answer for <span className="font-mono font-bold">x² + 7x + 12</span>:
                </p>

                <form onSubmit={handlePracticeSubmit} className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={practiceAnswer}
                    onChange={(e) => setPracticeAnswer(e.target.value)}
                    placeholder="e.g. (x + 3)(x + 4)"
                    className="flex-1 rounded-xl border border-[#d6dbce] bg-[#f9faf4] px-4 py-2 text-xs font-mono outline-none focus:border-[#a0b889]"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-[#1b221d] px-4 py-2 text-xs font-bold text-[#c9f35b] hover:bg-[#2e3931]"
                  >
                    Check
                  </button>
                </form>

                {practiceFeedback && (
                  <p className="mt-3 rounded-xl bg-[#eef7e6] p-3 text-xs font-medium text-[#255f30]">
                    {practiceFeedback}
                  </p>
                )}
              </div>
            </div>

            {/* Right: Upcoming Sessions & My Tutors */}
            <div className="space-y-6">
              {/* Upcoming Lessons Card */}
              <div id="upcoming" className="rounded-3xl border border-[#dce1d5] bg-[#fffefa] p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#1b221d]">Upcoming Lessons</h3>
                  <Link href="/ask" className="text-xs font-bold text-[#2e7d54] hover:underline">
                    Book session +
                  </Link>
                </div>

                <div className="mt-5 space-y-3">
                  {upcomingLessonsData.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between rounded-2xl border border-[#edf0e7] p-3.5 hover:bg-[#fbfcf8] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl ${lesson.color}`}
                        >
                          <span className="text-xs font-black leading-none">{lesson.day}</span>
                          <span className="mt-0.5 text-[8px] font-bold tracking-wider">
                            {lesson.month}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#1c221e]">{lesson.title}</p>
                          <p className="text-[11px] text-[#788073]">
                            {lesson.time} · {lesson.person}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setClassroomOpen(true)}
                        className="rounded-full bg-[#1b221d] px-3.5 py-1.5 text-[11px] font-bold text-[#c9f35b] hover:bg-[#2b352e]"
                      >
                        Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Tutors Card */}
              <div id="tutors" className="rounded-3xl border border-[#dce1d5] bg-[#fffefa] p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#1b221d]">Recommended Tutors</h3>
                  <span className="text-xs text-[#717a6c]">Vetted for your subjects</span>
                </div>

                <div className="mt-5 space-y-3">
                  {recommendedTutorsData.slice(0, 3).map((tutor) => (
                    <div
                      key={tutor.id}
                      className="flex items-center justify-between rounded-2xl border border-[#edf0e7] p-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1b221d] text-xs font-bold text-[#c9f35b]">
                          {tutor.initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-bold text-[#1c221e]">{tutor.name}</p>
                            <span className="text-[10px] text-[#29784e]">★ {tutor.rating}</span>
                          </div>
                          <p className="text-[11px] text-[#788073]">
                            {tutor.subject} · {tutor.price}
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/ask"
                        className="rounded-full border border-[#cbd1c2] px-3 py-1 text-[11px] font-bold text-[#2e372b] hover:bg-[#eef2e6]"
                      >
                        Ask Question
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* CLASSROOM VIDEO ROOM SIMULATOR MODAL */}
      {classroomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-2xl rounded-3xl border border-[#3b433d] bg-[#1a201c] p-6 text-white shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-[#2d3630] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-ping rounded-full bg-[#c9f35b]" />
                <h3 className="text-base font-bold text-white">
                  Live Classroom · Maya Singh & Jordan Davis
                </h3>
              </div>
              <button onClick={() => setClassroomOpen(false)} className="text-[#88958c] hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 aspect-video w-full rounded-2xl border border-[#323d35] bg-[#222a24] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#171d18] px-3 py-1 text-xs font-mono text-[#c9f35b]">
                  Topic: Factoring Quadratics
                </span>
                <span className="text-xs text-[#8c9c90]">00:14:32</span>
              </div>

              {/* Simulated whiteboard */}
              <div className="rounded-xl bg-[#fffefa] p-4 text-[#1a211c]">
                <p className="text-xs font-bold text-[#6d7568]">Whiteboard Step 3:</p>
                <p className="font-mono text-base font-extrabold text-[#1a211c]">
                  (x + 2)(x + 3) = 0  ⟶  x = -2, x = -3
                </p>
                <p className="mt-1 text-[11px] text-[#4b8f67]">
                  Maya: &ldquo;Notice how multiplying the signs gives us our positive 6!&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <span className="rounded-full bg-[#2f3b33] px-4 py-1.5 text-xs font-bold text-white">
                  Microphone On
                </span>
                <span className="rounded-full bg-[#2f3b33] px-4 py-1.5 text-xs font-bold text-white">
                  Camera On
                </span>
                <span className="rounded-full bg-[#2f3b33] px-4 py-1.5 text-xs font-bold text-[#c9f35b]">
                  Screen Share Active
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setClassroomOpen(false)}
                className="rounded-full bg-[#dc2626] px-5 py-2 text-xs font-bold text-white"
              >
                Leave Classroom
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

