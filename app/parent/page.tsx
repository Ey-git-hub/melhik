"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  BarChart3,
  CalendarDays,
  CircleDollarSign,
  Clock,
  ArrowRight,
  Check,
  Star,
  Users,
  MessageSquare,
  FileText,
  ChevronRight,
  Menu,
  X,
  Send,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import {
  parentStats,
  upcomingLessonsData,
  parentProgressReports,
} from "@/app/lib/mock-data";

export default function ParentPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState("Jordan Davis (10th Grade)");
  const [budgetLimit, setBudgetLimit] = useState(400);
  const [parentReply, setParentReply] = useState("");
  const [replySent, setReplySent] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentReply) return;
    setReplySent(true);
    setTimeout(() => {
      setParentReply("");
      setReplySent(false);
    }, 2500);
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#984a17]">
                Parent Portal
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
            Family Space
          </p>
          <nav className="mt-3 space-y-1">
            <a
              href="#overview"
              className="flex items-center gap-3 rounded-xl bg-[#1b221d] px-3 py-2.5 text-xs font-bold text-[#c9f35b] shadow-sm"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Progress & Recaps</span>
            </a>

            <a
              href="#schedule"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-[#535d4f] hover:bg-[#eef2e6] hover:text-[#1c221e]"
            >
              <CalendarDays className="h-4 w-4" />
              <span>Lessons & Calendar</span>
            </a>

            <a
              href="#messages"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-[#535d4f] hover:bg-[#eef2e6] hover:text-[#1c221e]"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Tutor Feedback</span>
            </a>

            <a
              href="#billing"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-[#535d4f] hover:bg-[#eef2e6] hover:text-[#1c221e]"
            >
              <CircleDollarSign className="h-4 w-4" />
              <span>Budget & Invoices</span>
            </a>
          </nav>

          {/* Cross portal links */}
          <div className="mt-8 rounded-2xl border border-[#dfe4d8] bg-[#f8faf3] p-3.5">
            <p className="text-[11px] font-bold text-[#2d352b]">Switch view</p>
            <div className="mt-2 space-y-1.5">
              <Link
                href="/student"
                className="flex items-center justify-between rounded-lg px-2 py-1 text-xs text-[#525b4e] hover:bg-[#ebf0e3]"
              >
                <span>Student Space</span>
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

        {/* Parent Profile Card */}
        <div className="border-t border-[#e5e8de] pt-4">
          <div className="flex items-center gap-3 px-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1b221d] text-xs font-bold text-[#f2a265]">
              TD
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-[#1f2620]">Taylor Davis</p>
              <p className="truncate text-[11px] text-[#788072]">Parent Guardian</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-20 flex h-[74px] items-center justify-between border-b border-[#e3e6dc] bg-[#fffefa]/90 px-5 backdrop-blur-md sm:px-8">
          <button
            onClick={() => setMobileNavOpen(true)}
            className="rounded-lg p-2 text-[#576053] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Active Child Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#666e60]">Viewing child:</span>
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="rounded-xl border border-[#d6dbce] bg-[#f9faf4] px-3 py-1.5 text-xs font-bold text-[#1a211c] outline-none"
            >
              <option value="Jordan Davis (10th Grade)">Jordan Davis (10th Grade)</option>
              <option value="Maya Davis (7th Grade)">Maya Davis (7th Grade)</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/ask"
              className="flex items-center gap-2 rounded-full bg-[#1b221d] px-4 py-2 text-xs font-bold text-[#c9f35b] hover:bg-[#2c362e]"
            >
              <span>Book New Session</span>
            </Link>

            <Link
              href="/"
              className="rounded-full border border-[#d2d7c9] px-3 py-1.5 text-xs font-bold text-[#2a3229] hover:bg-[#eef2e6]"
            >
              Home
            </Link>
          </div>
        </header>

        {/* Parent Content Body */}
        <main className="mx-auto max-w-[1400px] p-5 sm:p-8 lg:p-10">
          {/* Greeting */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#868f80]">
                Family Learning Overview
              </span>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1a211c] sm:text-3xl">
                Jordan&apos;s Academic Growth
              </h1>
              <p className="mt-1 text-xs text-[#6e7668]">
                Track milestones, teacher feedback, upcoming sessions, and tuition receipts in one transparent place.
              </p>
            </div>

            <button
              onClick={() => setInvoiceModal(true)}
              className="flex items-center gap-2 rounded-2xl border border-[#d0d6c7] bg-[#fffefa] px-4 py-2.5 text-xs font-bold text-[#202720] hover:bg-[#f1f3ea]"
            >
              <FileText className="h-4 w-4 text-[#8cbd22]" />
              <span>June Tuition Receipt ($320.00)</span>
            </button>
          </div>

          {/* Parent Stats Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {parentStats.map((stat, idx) => (
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

          {/* Section 1: Subject Mastery & Progress Reports */}
          <div id="overview" className="mt-8 rounded-[28px] border border-[#dbe0d4] bg-[#fffefa] p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-[#1a211c]">Subject Progress & Mastery</h2>
                <p className="text-xs text-[#717a6c]">
                  Detailed breakdown reported directly by specialist tutors
                </p>
              </div>
              <span className="rounded-full bg-[#e8f6ed] px-3 py-1 text-xs font-bold text-[#1f6b45]">
                +9.4% Quarterly Gain
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {parentProgressReports.map((report, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#edf0e7] bg-[#fbfcf9] p-5 transition-all hover:border-[#cbd3c2]"
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-sm font-bold text-[#1a211c]">{report.subject}</h3>
                      <p className="text-xs text-[#6e7769]">
                        Tutor: <span className="font-semibold text-[#1e251f]">{report.tutor}</span> · Recent: {report.recentTopic}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-extrabold text-[#1a211c]">{report.score}%</span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          report.status === "Mastered"
                            ? "bg-[#dcfce7] text-[#15803d]"
                            : report.status === "Excelling"
                            ? "bg-[#e0e7ff] text-[#3730a3]"
                            : "bg-[#fef3c7] text-[#92400e]"
                        }`}
                      >
                        {report.status}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#e6eadf]">
                    <div
                      className="h-full rounded-full bg-[#207246]"
                      style={{ width: `${report.score}%` }}
                    />
                  </div>

                  {/* Tutor Note */}
                  <div className="mt-4 rounded-xl border border-[#e1e6d9] bg-[#f5f8f0] p-3 text-xs leading-relaxed text-[#30382e]">
                    <span className="font-bold text-[#1e251f]">Tutor Note:</span> &ldquo;{report.tutorNote}&rdquo;
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Tutor Messages & Upcoming Lessons */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Tutor Feedback & Reply Box */}
            <div id="messages" className="rounded-[28px] border border-[#dbe0d4] bg-[#fffefa] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#1b221d]">Tutor Communications</h3>
                  <p className="text-xs text-[#717a6c]">Direct dialogue with Maya Singh</p>
                </div>
                <span className="rounded-full bg-[#f3f5ec] px-2.5 py-1 text-[11px] font-bold text-[#454e41]">
                  Active
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-[#e2e7dc] bg-[#f8faf3] p-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1b221d] text-xs font-bold text-[#c9f35b]">
                    MS
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#1c221e]">Maya Singh</p>
                    <p className="text-[10px] text-[#747d70]">Yesterday at 5:02 PM</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#3a4237]">
                  &ldquo;Taylor, Jordan did phenomenal today with quadratic factoring. They had been stuck on picking the middle terms, but once we framed it as a balance puzzle, it completely clicked. We have SAT math scheduled next!&rdquo;
                </p>
              </div>

              {/* Reply Input */}
              <form onSubmit={handleSendReply} className="mt-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={parentReply}
                    onChange={(e) => setParentReply(e.target.value)}
                    placeholder="Reply to Maya..."
                    className="flex-1 rounded-xl border border-[#d6dbcd] bg-[#f9faf4] px-3.5 py-2 text-xs outline-none focus:border-[#a0b889]"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 rounded-xl bg-[#1b221d] px-4 py-2 text-xs font-bold text-[#c9f35b] hover:bg-[#2b352e]"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send</span>
                  </button>
                </div>
                {replySent && (
                  <p className="mt-2 text-xs font-bold text-[#1e613b]">
                    ✓ Message sent to Maya Singh!
                  </p>
                )}
              </form>
            </div>

            {/* Upcoming Lesson Schedule */}
            <div id="schedule" className="rounded-[28px] border border-[#dbe0d4] bg-[#fffefa] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#1b221d]">Scheduled Lessons</h3>
                  <p className="text-xs text-[#717a6c]">Calendar bookings and attendance</p>
                </div>
                <Link href="/ask" className="text-xs font-bold text-[#237048] hover:underline">
                  Add lesson +
                </Link>
              </div>

              <div className="mt-5 space-y-3">
                {upcomingLessonsData.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between rounded-2xl border border-[#edf0e7] p-3.5 hover:bg-[#fbfcf8]"
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
                      onClick={() => alert(`Reschedule request opened for ${lesson.title}`)}
                      className="rounded-full border border-[#cbd1c2] px-3 py-1 text-[11px] font-bold text-[#2e372b] hover:bg-[#eef2e6]"
                    >
                      Reschedule
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Monthly Budget & Invoices */}
          <div id="billing" className="mt-8 rounded-[28px] border border-[#dbe0d4] bg-[#fffefa] p-6 shadow-sm sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-bold text-[#1b221d]">
                  Family Monthly Tuition Budget
                </h3>
                <p className="text-xs text-[#717a6c]">
                  Control monthly spend ceilings and automate receipts
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-[#747e70]">Current spend:</span>
                <span className="ml-2 text-lg font-black text-[#1b221d]">$320.00</span>
                <span className="text-xs text-[#747e70]"> / ${budgetLimit} limit</span>
              </div>
            </div>

            <div className="mt-6 max-w-xl">
              <label className="block text-xs font-bold text-[#353d31]">
                Adjust Monthly Spend Ceiling
              </label>
              <input
                type="range"
                min="200"
                max="800"
                step="25"
                value={budgetLimit}
                onChange={(e) => setBudgetLimit(Number(e.target.value))}
                className="mt-3 w-full accent-[#1b221d]"
              />
              <p className="mt-1 text-[11px] text-[#717b6e]">
                We will notify you before booking if any new lesson exceeds ${budgetLimit}/month.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* INVOICE MODAL */}
      {invoiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl border border-[#d8dacf] bg-[#fffefa] p-6 shadow-xl sm:p-8">
            <div className="flex items-center justify-between border-b border-[#e3e6db] pb-4">
              <div>
                <h3 className="text-base font-bold text-[#1b221d]">Tuition Receipt #INV-8492</h3>
                <p className="text-[11px] text-[#768071]">Melhik Learning Marketplace</p>
              </div>
              <button onClick={() => setInvoiceModal(false)} className="text-[#868f80]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-3 text-xs">
              <div className="flex justify-between py-1">
                <span className="text-[#646d5f]">Student:</span>
                <span className="font-bold text-[#1b221d]">Jordan Davis</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#646d5f]">Parent Billing Contact:</span>
                <span className="font-bold text-[#1b221d]">Taylor Davis</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#646d5f]">Lessons Completed (June):</span>
                <span className="font-bold text-[#1b221d]">8 sessions</span>
              </div>
              <div className="flex justify-between py-1 border-t border-[#e3e6db] pt-3 font-bold">
                <span>Total Settled:</span>
                <span className="text-sm font-extrabold text-[#1b221d]">$320.00</span>
              </div>
              <div className="flex justify-between py-1 text-[11px] text-[#256f44]">
                <span>Status:</span>
                <span>Paid via Visa ending in 4029</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => {
                  alert("PDF receipt downloaded!");
                  setInvoiceModal(false);
                }}
                className="w-full rounded-full bg-[#1b221d] py-2.5 text-xs font-bold text-[#c9f35b]"
              >
                Download PDF Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

