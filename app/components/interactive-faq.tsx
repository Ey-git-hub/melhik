"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqsList } from "@/app/lib/mock-data";

export default function InteractiveFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-[#dcdfd2]">
      {faqsList.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-6 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <h4 className="text-lg font-bold tracking-tight text-[#1c221e] sm:text-xl">
                {faq.question}
              </h4>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eeefe5] text-[#4f564b] transition-colors hover:bg-[#c9f35b] hover:text-[#19201b]">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <p className="mt-3.5 pr-8 text-sm leading-relaxed text-[#5e6659] sm:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

