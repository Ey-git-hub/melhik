"use client";

import { useState } from "react";
import { subjectDemos } from "@/app/lib/mock-data";
import { Sparkles, Check, ArrowRight, RefreshCw } from "lucide-react";

export default function InteractiveHeroDemo() {
  const [selectedSubjectId, setSelectedSubjectId] = useState("maths");
  const [activeStep, setActiveStep] = useState(2); // default show all steps

  const activeDemo =
    subjectDemos.find((d) => d.id === selectedSubjectId) || subjectDemos[0];

  return (
    <div className="relative mx-auto w-full max-w-[560px] rounded-[32px] border border-[#2f3832] bg-[#1a201c] p-6 text-white shadow-[0_24px_50px_rgba(20,26,22,0.35)] sm:p-8">
      {/* Subject switcher tabs inside the interactive card */}
      <div className="mb-6 flex items-center justify-between gap-2 border-b border-[#2d3630] pb-4">
        <div className="flex items-center gap-1.5">
          {subjectDemos.map((demo) => {
            const isSelected = demo.id === selectedSubjectId;
            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => {
                  setSelectedSubjectId(demo.id);
                  setActiveStep(demo.steps.length - 1);
                }}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-[#c9f35b] text-[#171d18] shadow-sm"
                    : "text-[#87938a] hover:bg-[#252e27] hover:text-[#d3ddd5]"
                }`}
              >
                {demo.subject}
              </button>
            );
          })}
        </div>
        <span className="hidden text-[10px] font-bold uppercase tracking-wider text-[#69776d] sm:inline-block">
          Live Demo
        </span>
      </div>

      {/* From "I don't get it" to "Oh, I see it." */}
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em]">
        <span className="text-[#88958c]">From &ldquo;I don&apos;t get it&rdquo;</span>
        <div className="flex items-center gap-1.5 text-[#c9f35b]">
          <span>To &ldquo;Oh, I see it.&rdquo;</span>
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>

      <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
        One question. A new way to see it.
      </h3>

      {/* Question bubble */}
      <div className="mt-5 rounded-2xl border border-[#303c33] bg-[#222a24] p-4">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#8e9f93]">
          {activeDemo.questionBadge}
        </span>
        <p className="mt-1 text-base font-semibold leading-snug text-[#ebf3ed]">
          &ldquo;{activeDemo.question}&rdquo;
        </p>
      </div>

      {/* Nested White Solution Card */}
      <div className="mt-4 overflow-hidden rounded-2xl bg-white p-5 text-[#202522] shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#1f2622]">{activeDemo.concept}</p>
          <button
            type="button"
            onClick={() => setActiveStep((prev) => (prev >= activeDemo.steps.length - 1 ? 0 : prev + 1))}
            className="flex items-center gap-1 text-[11px] font-bold text-[#357a57] hover:text-[#184831]"
          >
            <RefreshCw className="h-3 w-3" />
            <span>Next step</span>
          </button>
        </div>

        <div className="mt-4 space-y-2">
          {activeDemo.steps.map((step, index) => {
            const isVisible = index <= activeStep;
            const isLatest = index === activeStep;

            return (
              <div
                key={index}
                className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-medium transition-all duration-300 ${
                  !isVisible
                    ? "opacity-30"
                    : isLatest && step.highlight
                    ? "bg-[#c9f35b] font-bold text-[#1a211b] shadow-sm"
                    : "bg-[#f4f6f0] text-[#333b36]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px]">{step.equation}</span>
                </div>
                <span className="text-[11px] opacity-80">{step.annotation}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-3 text-[11px] leading-relaxed text-[#757d77]">
          💡 <span className="font-semibold text-[#27302b]">Tutor insight:</span> {activeDemo.takeaway}
        </p>
      </div>

      {/* Bottom Footer Caption */}
      <div className="mt-5 flex items-center justify-between border-t border-[#29322b] pt-4 text-xs text-[#8d9b90]">
        <span className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-[#c9f35b]" />
          A real tutor. Your pace. Your lightbulb moment.
        </span>
        <button
          type="button"
          onClick={() => setActiveStep(activeDemo.steps.length - 1)}
          className="text-[11px] font-semibold text-[#c9f35b] hover:underline"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

