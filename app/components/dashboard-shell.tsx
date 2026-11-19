"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Menu,
  MoreHorizontal,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import {
  recommendedTutors,
  roleConfig,
  statsByRole,
  students,
  upcomingLessons,
  type Role,
} from "@/app/lib/mock-data";

const roles: Role[] = ["admin", "tutor", "student", "parent"];

function Avatar({ initials, className = "" }: { initials: string; className?: string }) {
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1f2937] text-xs font-semibold text-white ${className}`}>
      {initials}
    </span>
  );
}

function StatCard({ label, value, change, tone }: { label: string; value: string; change: string; tone: string }) {
  return (
    <div className="rounded-2xl border border-[#e7e7e3] bg-white p-5 shadow-[0_8px_24px_rgba(29,35,41,0.03)]">
      <div className="mb-6 flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-[#78807e]">{label}</p>
        <span className={`h-2.5 w-2.5 rounded-full ${tone === "mint" ? "bg-[#83ddbd]" : tone === "lavender" ? "bg-[#b9a7f6]" : tone === "peach" ? "bg-[#ffad75]" : "bg-[#75b9f4]"}`} />
      </div>
      <div className="flex items-end justify-between gap-2">
        <p className="text-[1.65rem] font-semibold tracking-[-0.04em] text-[#202625]">{value}</p>
        <p className="mb-1 text-xs font-semibold text-[#36a77d]">{change}</p>
      </div>
    </div>
  );
}

function SectionHeading({ title, action = "View all" }: { title: string; action?: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-base font-semibold text-[#202625]">{title}</h2>
      <button className="flex items-center gap-1 text-xs font-semibold text-[#6d7773] transition-colors hover:text-[#171c1b]">
        {action} <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function LessonsCard() {
  return (
    <div className="rounded-2xl border border-[#e7e7e3] bg-white p-5">
      <SectionHeading title="Upcoming lessons" />
      <div className="space-y-3">
        {upcomingLessons.map((lesson) => (
          <div className="flex items-center gap-3 rounded-xl border border-[#f0f0ec] p-3" key={lesson.title}>
            <div className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl ${lesson.color}`}>
              <span className="text-base font-semibold leading-none text-[#27302e]">{lesson.day}</span>
              <span className="mt-1 text-[9px] font-bold tracking-wider text-[#738079]">{lesson.month}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#29302e]">{lesson.title}</p>
              <p className="mt-1 text-xs text-[#88908d]">{lesson.time} · {lesson.person}</p>
            </div>
            <button aria-label={`More options for ${lesson.title}`} className="rounded-lg p-1 text-[#a2aaa6] hover:bg-[#f5f6f3]">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentsCard({ parent = false }: { parent?: boolean }) {
  return (
    <div className="rounded-2xl border border-[#e7e7e3] bg-white p-5">
      <SectionHeading title={parent ? "Child progress" : "Your students"} />
      <div className="space-y-4">
        {students.map((student) => (
          <div className="flex items-center gap-3" key={student.name}>
            <Avatar initials={student.initials} className={student.color + " !text-[#3e4a46]"} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm font-semibold text-[#303735]">{parent && student.name === "Jordan Davis" ? "Jordan" : student.name}</p>
                <span className="text-xs font-semibold text-[#697571]">{student.progress}%</span>
              </div>
              <p className="mt-0.5 text-xs text-[#909995]">{student.detail}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#eef0ed]">
                <div className="h-full rounded-full bg-[#79cda9]" style={{ width: `${student.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TutorsCard() {
  return (
    <div className="rounded-2xl border border-[#e7e7e3] bg-white p-5">
      <SectionHeading title="Recommended tutors" />
      <div className="space-y-3">
        {recommendedTutors.map((tutor) => (
          <div className="flex items-center gap-3" key={tutor.name}>
            <Avatar initials={tutor.initials} className={(tutor.accent || "bg-[#dff7ee]") + " !text-[#3e4a46]"} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#303735]">{tutor.name}</p>
              <p className="mt-0.5 text-xs text-[#909995]">{tutor.subject} · ★ {tutor.rating}</p>
            </div>
            <span className="text-xs font-semibold text-[#697571]">{tutor.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoleDashboard({ role }: { role: Role }) {
  const config = roleConfig[role];
  const stats = statsByRole[role];
  const isStudent = role === "student";
  const isParent = role === "parent";

  return (
    <>
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#94a09b]">{config.eyebrow}</p>
          <h1 className="text-[1.8rem] font-semibold tracking-[-0.045em] text-[#202625] sm:text-[2.1rem]">{config.greeting}</h1>
          <p className="mt-2 text-sm text-[#7d8782]">{config.description}</p>
        </div>
        <button className="flex w-fit items-center gap-2 rounded-xl bg-[#1f2926] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#34413c]">
          <Sparkles className="h-4 w-4 text-[#8de0bc]" />
          {isStudent ? "Book a session" : isParent ? "Add a child" : role === "admin" ? "Invite user" : "Create lesson"}
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </div>
      <div className="mt-7 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
        <LessonsCard />
        {isStudent ? <TutorsCard /> : <StudentsCard parent={isParent} />}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.45fr]">
        {isStudent ? <StudentsCard /> : <TutorsCard />}
        <div className="rounded-2xl border border-[#e7e7e3] bg-white p-5">
          <SectionHeading title={role === "admin" ? "Recent activity" : isParent ? "Payment history" : "Weekly overview"} />
          <div className="flex h-36 items-end gap-3 px-2 pt-4">
            {[42, 63, 52, 78, 59, 88, 72].map((height, index) => (
              <div className="flex flex-1 flex-col items-center gap-2" key={index}>
                <div className={`w-full rounded-t-md ${index === 5 ? "bg-[#54bd91]" : "bg-[#e4f2eb]"}`} style={{ height: `${height}%` }} />
                <span className="text-[10px] text-[#a0a9a4]">{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function DashboardShell() {
  const [role, setRole] = useState<Role>("admin");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const config = roleConfig[role];

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#202625]">
      <aside className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-[#e7e9e3] bg-[#fbfcf9] px-5 py-6 transition-transform lg:translate-x-0 ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#1d2824] text-sm font-bold text-white">m</span>
            <span className="text-xl font-semibold tracking-[-0.06em] text-[#24302b]">melhik</span>
          </div>
          <button aria-label="Close navigation" className="rounded-lg p-1 text-[#9ba49f] lg:hidden" onClick={() => setMobileNavOpen(false)}><X className="h-5 w-5" /></button>
        </div>
        <div className="mt-10 flex-1">
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#abb4ae]">Workspace</p>
          <nav className="mt-3 space-y-1">
            {config.nav.map((item, index) => {
              const Icon = item.icon;
              return <button className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${index === 0 ? "bg-[#e4f5ed] text-[#267052]" : "text-[#7b8580] hover:bg-[#f0f3ef] hover:text-[#303a36]"}`} key={item.label}><Icon className="h-[17px] w-[17px]" />{item.label}</button>;
            })}
          </nav>
          <div className="mt-10 rounded-2xl bg-[#e7f6ef] p-4">
            <p className="text-xs font-semibold text-[#267052]">Try the new planner</p>
            <p className="mt-1.5 text-[11px] leading-4 text-[#6e8f7e]">Plan your week with less effort and more clarity.</p>
            <button className="mt-3 text-[11px] font-bold text-[#267052]">Explore planner →</button>
          </div>
        </div>
        <div className="border-t border-[#e7e9e3] pt-4">
          <button className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-[#f0f3ef]">
            <Avatar initials={config.avatar} />
            <span className="min-w-0 flex-1"><span className="block truncate text-xs font-semibold text-[#36403c]">{config.greeting.replace("Good morning, ", "")}</span><span className="mt-0.5 block text-[11px] text-[#9aa39e]">{config.label} account</span></span>
            <ChevronDown className="h-4 w-4 text-[#a5ada8]" />
          </button>
        </div>
      </aside>
      {mobileNavOpen && <button aria-label="Close navigation overlay" className="fixed inset-0 z-20 bg-[#1b2622]/20 lg:hidden" onClick={() => setMobileNavOpen(false)} />}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 flex h-[73px] items-center justify-between border-b border-[#e7e9e3] bg-[#fbfcf9]/90 px-5 backdrop-blur-md sm:px-8">
          <button aria-label="Open navigation" className="rounded-lg p-2 text-[#64706a] lg:hidden" onClick={() => setMobileNavOpen(true)}><Menu className="h-5 w-5" /></button>
          <div className="relative hidden w-64 sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9da7a1]" />
            <input className="w-full rounded-xl border border-[#e5e9e3] bg-white py-2.5 pl-9 pr-3 text-xs text-[#3c4742] outline-none placeholder:text-[#aeb6b1] focus:border-[#9dd5bc]" placeholder="Search anything..." />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center rounded-xl border border-[#e5e9e3] bg-white p-1 sm:flex">
              {roles.map((item) => <button className={`rounded-lg px-2.5 py-1.5 text-[11px] font-semibold capitalize transition-colors ${item === role ? "bg-[#e3f5ec] text-[#267052]" : "text-[#919b95] hover:text-[#34413b]"}`} key={item} onClick={() => setRole(item)}>{item}</button>)}
            </div>
            <button aria-label="Notifications" className="relative rounded-xl border border-[#e5e9e3] bg-white p-2.5 text-[#78837d] hover:bg-[#f4f6f3]"><Bell className="h-4 w-4" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#ef8e68]" /></button>
            <Avatar initials={config.avatar} className="h-8 w-8 text-[10px]" />
          </div>
        </header>
        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10"><RoleDashboard role={role} /></main>
      </div>
    </div>
  );
}
