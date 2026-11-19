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
  const [activeTab, setActiveTab] = useState<ViewTab>("sessions");

  return (
    <div className="relative mx-auto w-full max-w-[560px] rounded-[32px] border border-[#2f3832] bg-[#1a201c] p-6 text-white shadow-[0_24px_50px_rgba(20,26,22,0.35)] sm:p-8">
      {/* Tab switcher */}
      <div className="mb-6 flex items-center justify-between gap-2 border-b border-[#2d3630] pb-4">
        <div className="flex items-center gap-1.5">
          {(["sessions", "progress"] as ViewTab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition-all ${
                activeTab === tab
                  ? "bg-[#c9f35b] text-[#171d18] shadow-sm"
                  : "text-[#87938a] hover:bg-[#252e27] hover:text-[#d3ddd5]"
              }`}
            >
              {tab === "sessions" ? "Session Log" : "Progress"}
            </button>
          ))}
        </div>
        <span className="hidden text-[10px] font-bold uppercase tracking-wider text-[#69776d] sm:inline-block">
          Live Preview
        </span>
      </div>

      {activeTab === "sessions" ? (
        <>
          {/* Sessions View */}
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em]">
            <span className="text-[#88958c]">Lesson History</span>
            <span className="flex items-center gap-1.5 text-[#c9f35b]">
              <span>This week</span>
            </span>
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
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                        session.status === "completed"
                          ? "bg-[#c9f35b] text-[#171d18]"
                          : "bg-[#3a4a3f] text-[#87938a]"
                      }`}
                    >
                      {session.status === "completed" ? (
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" />
                      )}
                    </span>
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

                <div className="mt-2 flex items-center gap-4 text-[11px] text-[#7a8775]">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {session.date}
                  </span>
                  <span>· {session.duration}</span>
                  <span>· {session.tutor}</span>
                </div>

                {session.note && (
                  <p className="mt-2 rounded-xl bg-[#252e27] px-3 py-2 text-[11px] leading-relaxed text-[#a4b1a7]">
                    {session.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Progress View */}
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em]">
            <span className="text-[#88958c]">Monthly Progress</span>
            <span className="flex items-center gap-1.5 text-[#c9f35b]">
              <TrendingUp className="h-3 w-3" />
              <span>Trending up</span>
            </span>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl bg-white p-5 text-[#202522] shadow-md">
            <div className="space-y-4">
              {[
                { subject: "Mathematics", score: 82, change: "+14%", sessions: 8 },
                { subject: "Physics", score: 74, change: "+9%", sessions: 6 },
                { subject: "English", score: 92, change: "+5%", sessions: 4 },
              ].map((item) => (
                <div key={item.subject}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1f2622]">
                      <BookOpen className="mr-1.5 inline-block h-3.5 w-3.5 text-[#5a6356]" />
                      {item.subject}
                    </span>
                    <span className="text-[#5a6356]">
                      {item.sessions} sessions · <span className="font-semibold text-[#2a7a4a]">{item.change}</span>
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[#eef0e7]">
                    <div
                      className="h-full rounded-full bg-[#c9f35b] transition-all duration-500"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <div className="mt-0.5 text-right text-[11px] font-semibold text-[#444c40]">
                    {item.score}% mastery
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-[#f7f9f2] p-3 text-[11px] leading-relaxed text-[#5a6356]">
              📊 <span className="font-bold text-[#1f2622]">Summary:</span> Jordan completed
              18 sessions this month across 3 subjects with a 94% attendance rate.
            </div>
          </div>
        </>
      )}

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

