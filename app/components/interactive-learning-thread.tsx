"use client";

import { useState } from "react";
import { Check, Sparkles, HelpCircle } from "lucide-react";
import { currentLearningThread } from "@/app/lib/mock-data";

export default function InteractiveLearningThread() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const { practiceQuestion } = currentLearningThread;

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
    setShowExplanation(true);
  };

  return (
    <div className="w-full rounded-[28px] border border-[#3b433d] bg-[#fffefa] p-6 text-[#1c221e] shadow-[0_20px_45px_rgba(0,0,0,0.25)] sm:p-8">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#e6e8de] pb-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a8174]">
          Your learning thread
        </span>
        <span className="rounded-full bg-[#d7f76e] px-3 py-1 text-[11px] font-bold text-[#1b221d]">
          {currentLearningThread.badge}
        </span>
      </div>

      {/* Title & Tutor Info */}
      <div className="mt-4">
        <h4 className="text-2xl font-bold tracking-tight text-[#1b221d]">
          {currentLearningThread.title}
        </h4>
        <p className="mt-1 text-xs font-medium text-[#71786c]">
          {currentLearningThread.topic} ·{" "}
          <span className="font-semibold text-[#1c221e]">{currentLearningThread.tutor}</span>
        </p>
      </div>

      <div className="my-5 h-px bg-[#e6e8de]" />

      {/* 01 Your 'aha' moment */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-[#7e8578]">01</span>
          <h5 className="text-sm font-bold tracking-tight text-[#1e2520]">
            Your &ldquo;aha&rdquo; moment
          </h5>
        </div>
        <div className="mt-2.5 rounded-2xl border border-[#dfe4d6] bg-[#f7f9f2] p-4 text-sm leading-relaxed text-[#353d34]">
          &ldquo;{currentLearningThread.ahaMoment}&rdquo;
        </div>
      </div>

      {/* 02 Now, try one on your own */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-[#7e8578]">02</span>
          <h5 className="text-sm font-bold tracking-tight text-[#1e2520]">
            Now, try one on your own
          </h5>
        </div>

        <div className="mt-3 rounded-2xl border border-[#d6dcce] bg-[#f9faf5] p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-base font-bold text-[#19201b]">
              {practiceQuestion.prompt}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#798074]">
              Interactive Task
            </span>
          </div>
          <p className="mt-1 text-xs text-[#6e7568]">{practiceQuestion.hint}</p>

          {/* Option Buttons */}
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {practiceQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === practiceQuestion.correctIndex;

              let btnStyle = "border-[#d8ded0] bg-white text-[#2a3229] hover:bg-[#eef2e6]";
              if (selectedOption !== null) {
                if (isSelected && isCorrect) {
                  btnStyle = "border-[#9ed632] bg-[#c9f35b] font-bold text-[#1a211b]";
                } else if (isSelected && !isCorrect) {
                  btnStyle = "border-[#f87171] bg-[#fee2e2] text-[#991b1b]";
                } else if (isCorrect) {
                  btnStyle = "border-[#86efac] bg-[#f0fdf4] font-semibold text-[#166534]";
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs font-medium transition-all ${btnStyle}`}
                >
                  <span className="font-mono">{option}</span>
                  {selectedOption !== null && isCorrect && (
                    <Check className="h-3.5 w-3.5 text-[#166534]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation if answered */}
          {showExplanation && (
            <div className="mt-3.5 rounded-xl bg-[#ecf7db] p-3 text-xs text-[#285718]">
              <span className="font-bold">
                {selectedOption === practiceQuestion.correctIndex ? "🎉 Spot on! " : "Keep trying! "}
              </span>
              {practiceQuestion.explanation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

