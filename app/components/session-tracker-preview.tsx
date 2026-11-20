"use client";

import { useState } from "react";
import { Check, Clock, CalendarDays, BookOpen, TrendingUp } from "lucide-react";

const sessionLogs = [
  {
    id: 1,
    subject: "Mathematics",
    topic: "Quadratic Equations",
    tutor: "Maya Singh",
    date: "Today, 3:30 PM",
    duration: "55 min",
    status: "completed" as const,
    note: "Mastered the quadratic formula.",
  },
  {
    id: 2,
    subject: "Physics",
    topic: "Newton's Laws",
    tutor: "Daniel Kim",
    date: "Yesterday, 10:00 AM",
    duration: "50 min",
    status: "completed" as const,
    note: "Practised free-body diagrams.",
  },
  {
    id: 3,
    subject: "English",
    topic: "Essay Structure",
    tutor: "Sofia Reed",
    date: "Thu, Nov 21",
    duration: "45 min",
    status: "upcoming" as const,
    note: null,
  },
];

type ViewTab = "sessions" | "progress";

export default function SessionTrackerPreview() {
  // const [activeTab, setActiveTab] = useState<ViewTab>("sessions");

  return (
    <div className="relative mx-auto w-full max-w-[560px] rounded-[32px] border border-[#2f3832] bg-[#1a201c] p-6 text-white shadow-[0_24px_50px_rgba(20,26,22,0.35)] sm:p-8">
      
        <div>
          {/* Sessions View */}
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em]">
            <span className="text-[#88958c]">Lesson History</span>
            {/* <span className="flex items-center gap-1.5 text-[#c9f35b]">
              <span>This week</span>
            </span> */}
          </div>

          <div className="mt-4 space-y-2.5">
            {sessionLogs.map((session) => (
              <div
                key={session.id}
                className={`rounded-2xl border p-4 transition-all ${
                  session.status === "upcoming"
                    ? "border-[#3a4a3f] bg-[#222a24]"
                    : "border-[#303c33] bg-[#1e2721]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="text-sm font-bold text-[#ebf3ed]">
                        {session.subject}
                      </span>
                      <span className="ml-2 text-xs text-[#7a8775]">
                        {session.topic}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                      session.status === "completed"
                        ? "bg-[#2a3a2d] text-[#a4d65a]"
                        : "bg-[#3a3a2d] text-[#d6c35a]"
                    }`}
                  >
                    {session.status}
                  </span>
                </div>

                

                {session.note && (
                  <p className="mt-2 rounded-xl bg-[#252e27] px-3 py-2 text-[11px] leading-relaxed text-[#a4b1a7]">
                    {session.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
     

      {/* Bottom Footer Caption */}
      <div className="mt-5 flex items-center justify-between border-t border-[#29322b] pt-4 text-xs text-[#8d9b90]">
        <span className="flex items-center gap-2">
          <CalendarDays className="h-3.5 w-3.5 text-[#c9f35b]" />
          Every in-person session. Logged and tracked.
        </span>
      </div>
    </div>
  );
}

