"use client";

import { useState } from "react";
import Link from "next/link";

const subjects = ["Maths", "Science", "English", "Coding"];

export default function IntakeScreen() {
  const [subject, setSubject] = useState("Maths");
  const [topic, setTopic] = useState("Algebra · Factoring quadratics");
  const [question, setQuestion] = useState(
    "I can solve x² + 5x + 6 = 0 with the formula, but I don’t understand how factoring works. How do I know which two numbers to choose?",
  );

  return (
    <main className="min-h-screen bg-[#f7f7ef] px-5 pb-16 text-[#20231f] sm:px-10 lg:px-20">
      <header className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between border-b border-[#dcded3]">
        <Link href="/" className="text-[27px] font-bold tracking-[-0.06em]">
          unstuck<span className="ml-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c9f35b]" />
        </Link>
        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#696e64]">
          Your student space
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] pt-10 sm:pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#858a80]">
          Find your way through
        </p>
        <h1 className="mt-4 max-w-[760px] text-[clamp(2.4rem,5vw,4.35rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
          Hey Alex, what&apos;s the sticky bit?
        </h1>
        <p className="mt-5 text-base text-[#72776d] sm:text-lg">
          Start where you are. We&apos;ll find someone to work through it with you.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-[1280px] rounded-[26px] border border-[#d8d9cf] bg-[#fffefa] px-7 py-7 shadow-[0_12px_35px_rgba(46,51,39,0.04)] sm:px-10 sm:py-8">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">01</span>
          <h2 className="text-lg font-bold tracking-[-0.025em]">Pick your subject</h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {subjects.map((item) => (
            <button
              className={`rounded-full px-4 py-3 text-sm font-semibold transition-colors ${
                subject === item
                  ? "bg-[#20231f] text-[#d3fa62]"
                  : "bg-[#eef0e7] text-[#6a7067] hover:bg-[#e3e7d9]"
              }`}
              key={item}
              onClick={() => setSubject(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <label className="mt-5 block text-sm text-[#858a80]" htmlFor="topic">
          Topic
          <input
            className="mt-1 w-full border-0 bg-transparent p-0 text-sm text-[#62685f] outline-none placeholder:text-[#9da197]"
            id="topic"
            onChange={(event) => setTopic(event.target.value)}
            value={topic}
          />
        </label>

        <div className="my-7 h-px bg-[#e2e3da]" />

        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">02</span>
          <h2 className="text-lg font-bold tracking-[-0.025em]">
            What would you like to understand?
          </h2>
        </div>
        <textarea
          aria-label="What would you like to understand?"
          className="mt-6 min-h-32 w-full resize-y rounded-2xl border border-[#d9dbd1] bg-[#f9f9f2] p-4 text-base leading-6 text-[#3d413a] outline-none transition-colors placeholder:text-[#9da197] focus:border-[#aab985]"
          onChange={(event) => setQuestion(event.target.value)}
          value={question}
        />
        <div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-[#e2e3da] pt-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-5 text-[#858a80]">
            Be as specific as you like. There&apos;s no wrong way to describe where you&apos;re stuck.
          </p>
          <button
            className="rounded-full bg-[#c9f35b] px-6 py-3 text-sm font-bold text-[#20231f] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            type="button"
          >
            Find my match
          </button>
        </div>
      </section>
    </main>
  );
}
