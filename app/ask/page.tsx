"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowRight,
  Sparkles,
  Check,
  Upload,
  User,
  Star,
  Clock,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import { recommendedTutorsData } from "@/app/lib/mock-data";

const subjectsList = [
  "Maths",
  "Science",
  "English",
  "Coding",
  "Humanities",
  "Languages",
];

const explanationStyles = [
  { id: "visual", label: "Visual & Diagrams", desc: "Drawings, flowcharts, graphs" },
  { id: "step", label: "Step-by-Step Logic", desc: "Rigorous formula breakdown" },
  { id: "analogy", label: "Real-world Analogies", desc: "Everyday examples and stories" },
  { id: "hands-on", label: "Work it Together", desc: "Interactive back-and-forth" },
];

function AskContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSubject = searchParams.get("subject") || "Maths";

  const [subject, setSubject] = useState(initialSubject);
  const [topic, setTopic] = useState("Algebra · Factoring quadratics");
  const [question, setQuestion] = useState(
    "I can solve x² + 5x + 6 = 0 with the quadratic formula, but I don’t understand how factoring works conceptually. How do I know which two numbers to pick?"
  );
  const [learningStyle, setLearningStyle] = useState("visual");
  const [matchingStatus, setMatchingStatus] = useState<"idle" | "searching" | "found">("idle");
  const [matchedTutor, setMatchedTutor] = useState(recommendedTutorsData[0]);

  const handleFindMatch = () => {
    setMatchingStatus("searching");
    setTimeout(() => {
      // Pick best tutor based on subject
      if (subject === "Science") {
        setMatchedTutor(recommendedTutorsData[1]); // Daniel Kim
      } else if (subject === "English") {
        setMatchedTutor(recommendedTutorsData[2]); // Sofia Reed
      } else {
        setMatchedTutor(recommendedTutorsData[0]); // Maya Singh
      }
      setMatchingStatus("found");
    }, 1200);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7ef] text-[#20231f]">
      <SiteHeader />

      <main className="flex-1 px-5 pb-20 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[960px]">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#666e61] transition-colors hover:text-[#19201b]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to home</span>
          </Link>

          {/* Heading */}
          <div className="mt-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#848c7e]">
              Find your way through
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#1a211c] sm:text-5xl">
              Hey Alex, what&apos;s the sticky bit?
            </h1>
            <p className="mt-3 text-base text-[#6b7366] sm:text-lg">
              Start where you are. We&apos;ll find someone who makes it click with you.
            </p>
          </div>

          {/* Main Intake Form Card */}
          <div className="mt-8 rounded-[30px] border border-[#d8dacf] bg-[#fffefa] p-6 shadow-[0_16px_40px_rgba(30,36,25,0.05)] sm:p-10">
            {/* Step 01: Subject */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-black text-[#858d7e]">01</span>
              <h2 className="text-lg font-bold tracking-tight text-[#1b221d]">
                Pick your subject
              </h2>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
              {subjectsList.map((item) => {
                const isSelected = subject === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setSubject(item);
                      if (item === "Science") setTopic("AP Chemistry · Gas Laws");
                      if (item === "English") setTopic("Essay Thesis Formulation");
                      if (item === "Coding") setTopic("Python · Recursive functions");
                      if (item === "Maths") setTopic("Algebra · Factoring quadratics");
                    }}
                    className={`rounded-full py-2.5 text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#1b221d] text-[#c9f35b] shadow-sm"
                        : "bg-[#eef0e7] text-[#555d50] hover:bg-[#e2e6d9]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Topic input */}
            <div className="mt-5 rounded-2xl border border-[#dfe3d7] bg-[#f8f9f3] px-4 py-3">
              <label htmlFor="topic-input" className="block text-[11px] font-bold uppercase tracking-wider text-[#798173]">
                Specific Topic / Unit
              </label>
              <input
                id="topic-input"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Factoring quadratics, Vector physics, Thesis writing"
                className="mt-1 w-full bg-transparent text-sm font-semibold text-[#202721] outline-none placeholder:text-[#9ea697]"
              />
            </div>

            <div className="my-8 h-px bg-[#e4e7dc]" />

            {/* Step 02: What would you like to understand? */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-black text-[#858d7e]">02</span>
              <h2 className="text-lg font-bold tracking-tight text-[#1b221d]">
                What would you like to understand?
              </h2>
            </div>

            <textarea
              rows={4}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Describe what's confusing or paste the question you're stuck on..."
              className="mt-5 w-full rounded-2xl border border-[#d6dbcc] bg-[#f9faf4] p-4 text-sm leading-relaxed text-[#252c24] outline-none transition-colors placeholder:text-[#9fa798] focus:border-[#a0b889]"
            />

            {/* Quick helper prompts */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-[#808879]">Try an example:</span>
              <button
                type="button"
                onClick={() =>
                  setQuestion(
                    "I understand the formula x = (-b ± √(b²-4ac))/2a, but what does the discriminant actually tell us graphically?"
                  )
                }
                className="rounded-full bg-[#f0f2ea] px-3 py-1 text-[11px] font-medium text-[#464e42] hover:bg-[#e3e6db]"
              >
                Discriminant concept
              </button>
              <button
                type="button"
                onClick={() =>
                  setQuestion(
                    "Can you help me see how conservation of momentum applies in 2D vector collisions?"
                  )
                }
                className="rounded-full bg-[#f0f2ea] px-3 py-1 text-[11px] font-medium text-[#464e42] hover:bg-[#e3e6db]"
              >
                Momentum vectors
              </button>
            </div>

            <div className="my-8 h-px bg-[#e4e7dc]" />

            {/* Step 03: Preferred Explanation Style */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-black text-[#858d7e]">03</span>
              <h2 className="text-lg font-bold tracking-tight text-[#1b221d]">
                How does your brain learn best?
              </h2>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {explanationStyles.map((style) => {
                const isSelected = learningStyle === style.id;
                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setLearningStyle(style.id)}
                    className={`flex flex-col rounded-2xl border p-4 text-left transition-all ${
                      isSelected
                        ? "border-[#1b221d] bg-[#1b221d] text-white shadow-sm"
                        : "border-[#d8ded0] bg-[#f9faf4] text-[#293229] hover:bg-[#f1f3ea]"
                    }`}
                  >
                    <span className="text-xs font-bold">{style.label}</span>
                    <span
                      className={`mt-1 text-[11px] leading-tight ${
                        isSelected ? "text-[#a9b8ad]" : "text-[#757d70]"
                      }`}
                    >
                      {style.desc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Upload worksheet optional attachment */}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-[#ccd3c2] bg-[#fcfdf9] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef0e6] text-[#5b6355]">
                  <Upload className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#232a22]">
                    Have a screenshot or worksheet?
                  </p>
                  <p className="text-[11px] text-[#7d8577]">
                    Attach PDF or image (optional).
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="rounded-full border border-[#cbd1c2] bg-white px-4 py-1.5 text-xs font-bold text-[#343c31] hover:bg-[#f3f5eb]"
              >
                Upload file
              </button>
            </div>

            {/* Bottom Match Button */}
            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#e4e7dc] pt-6 sm:flex-row sm:items-center">
              <p className="max-w-md text-xs leading-relaxed text-[#7c8476]">
                Be as specific as you like. There is no wrong way to describe where you
                are stuck.
              </p>
              <button
                type="button"
                onClick={handleFindMatch}
                disabled={matchingStatus === "searching"}
                className="flex items-center gap-2 rounded-full bg-[#c9f35b] px-7 py-3.5 text-sm font-bold text-[#1b221d] shadow-sm transition-transform hover:scale-105 active:scale-95 disabled:opacity-60"
              >
                <Sparkles className="h-4 w-4" />
                <span>
                  {matchingStatus === "searching" ? "Matching with tutors..." : "Find my match"}
                </span>
              </button>
            </div>

            {/* MATCH RESULT MODAL / DRAWER */}
            {matchingStatus === "found" && (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-3 duration-300 rounded-3xl border border-[#b2dca0] bg-[#f4faee] p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[#cde8be] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#207246] text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#1e613b]">
                      We found your ideal match
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#d6f578] px-3 py-1 text-xs font-bold text-[#1a211c]">
                    98% Compatibility
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1b221d] text-lg font-bold text-[#c9f35b]">
                      {matchedTutor.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-extrabold text-[#1a211c]">
                          {matchedTutor.name}
                        </h4>
                        <span className="rounded-full bg-[#e1ebd9] px-2 py-0.5 text-[10px] font-bold text-[#355f2d]">
                          {matchedTutor.badge}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-[#5c6456]">
                        {matchedTutor.subject} · ★ {matchedTutor.rating} ({matchedTutor.reviewsCount} sessions)
                      </p>
                      <p className="mt-1 text-xs text-[#788072]">{matchedTutor.bio}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="text-lg font-extrabold text-[#1a211c]">
                      {matchedTutor.price}
                    </span>
                    <span className="text-[11px] font-medium text-[#6c7467]">
                      Available today
                    </span>
                  </div>
                </div>

                {/* Match Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#cde8be] pt-5">
                  <button
                    type="button"
                    onClick={() => router.push("/student")}
                    className="flex items-center gap-2 rounded-full bg-[#1b221d] px-6 py-2.5 text-xs font-bold text-[#c9f35b] hover:bg-[#2b352e]"
                  >
                    <span>Connect in Student Space</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="rounded-full border border-[#b8cbb0] bg-white px-5 py-2.5 text-xs font-bold text-[#2e372b] hover:bg-[#edf5e8]"
                  >
                    Sign in to book
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default function AskPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading intake...</div>}>
      <AskContent />
    </Suspense>
  );
}

