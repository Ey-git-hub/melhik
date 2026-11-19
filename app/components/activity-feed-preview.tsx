"use client";

import { useState } from "react";
import { Check, Eye, MessageSquare, TrendingUp, Bell } from "lucide-react";

const activityFeed = [
  {
    id: 1,
    icon: "check" as const,
    actor: "Maya Singh",
    role: "Tutor",
    action: "logged a session",
    detail: "Algebra II · Factoring Quadratics · 55 min",
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: "eye" as const,
    actor: "Taylor Davis",
    role: "Parent",
    action: "viewed progress report",
    detail: "Jordan's Mathematics — 82% mastery",
    time: "3 hours ago",
  },
  {
    id: 3,
    icon: "message" as const,
    actor: "Maya Singh",
    role: "Tutor",
    action: "sent a session note",
    detail: "\"Jordan mastered the quadratic formula today. Ready for the next unit.\"",
    time: "3 hours ago",
  },
  {
    id: 4,
    icon: "trending" as const,
    actor: "System",
    role: "Melhik",
    action: "milestone reached",
    detail: "Jordan completed 10 sessions this month 🎉",
    time: "Yesterday",
  },
  {
    id: 5,
    icon: "bell" as const,
    actor: "Daniel Kim",
    role: "Tutor",
    action: "scheduled a session",
    detail: "AP Physics · Newton's Laws · Thursday 10:00 AM",
    time: "Yesterday",
  },
];

const iconMap = {
  check: Check,
  eye: Eye,
  message: MessageSquare,
  trending: TrendingUp,
  bell: Bell,
};

export default function ActivityFeedPreview() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <div className="w-full rounded-[28px] border border-[#3b433d] bg-[#fffefa] p-6 text-[#1c221e] shadow-[0_20px_45px_rgba(0,0,0,0.25)] sm:p-8">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#e6e8de] pb-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a8174]">
          Activity feed
        </span>
        <span className="rounded-full bg-[#d7f76e] px-3 py-1 text-[11px] font-bold text-[#1b221d]">
          Real-time
        </span>
      </div>

      {/* Feed Items */}
      <div className="mt-4 space-y-3">
        {activityFeed.slice(0, visibleCount).map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-[#e6e8de] bg-[#f9faf5] p-4 transition-all hover:border-[#c9d6b8]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef2e6] text-[#4a5346]">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-bold text-[#1c221e]">{item.actor}</span>
                    <span className="ml-1 rounded bg-[#eef2e6] px-1.5 py-0.5 text-[10px] font-semibold text-[#5a6356]">
                      {item.role}
                    </span>
                    <span className="ml-1 text-[#5e6659]">{item.action}</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#71786c]">
                    {item.detail}
                  </p>
                  <span className="mt-1 block text-[10px] text-[#9ba596]">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {visibleCount < activityFeed.length && (
        <button
          type="button"
          onClick={() => setVisibleCount(activityFeed.length)}
          className="mt-4 w-full rounded-xl border border-[#d8ded0] py-2 text-xs font-bold text-[#444c40] hover:bg-[#eef2e6]"
        >
          Show more activity ({activityFeed.length - visibleCount} more)
        </button>
      )}

      {visibleCount >= activityFeed.length && visibleCount > 3 && (
        <button
          type="button"
          onClick={() => setVisibleCount(3)}
          className="mt-4 w-full rounded-xl border border-[#d8ded0] py-2 text-xs font-bold text-[#444c40] hover:bg-[#eef2e6]"
        >
          Show less
        </button>
      )}
    </div>
  );
}

