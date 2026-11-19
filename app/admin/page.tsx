"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Search,
  Sparkles,
  Users,
  CalendarDays,
  CircleDollarSign,
  BarChart3,
  Settings,
  Shield,
  ArrowRight,
  MoreHorizontal,
  ChevronDown,
  UserCheck,
  UserX,
  Plus,
  SlidersHorizontal,
  CheckCircle2,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";
import { adminStats, adminUsersData, upcomingLessonsData } from "@/app/lib/mock-data";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "sessions" | "settings">("overview");
  const [userRoleFilter, setUserRoleFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [usersList, setUsersList] = useState(adminUsersData);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Tutor");
  const [commissionRate, setCommissionRate] = useState(15);
  const [autoMatchEnabled, setAutoMatchEnabled] = useState(true);
  const [aiSafetyEnabled, setAiSafetyEnabled] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Filtered users
  const filteredUsers = usersList.filter((u) => {
    const matchesRole =
      userRoleFilter === "all" || u.role.toLowerCase() === userRoleFilter.toLowerCase();
    const matchesSearch =
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const handleInviteUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    const newUser = {
      id: `usr-${Date.now().toString().slice(-4)}`,
      name: inviteEmail.split("@")[0].replace(".", " "),
      email: inviteEmail,
      role: inviteRole,
      grade: inviteRole === "Tutor" ? "Verified Tutor" : "Grade 10",
      status: "Active",
      sessionsCount: 0,
      totalSpentOrEarned: "$0",
      lastActive: "Just invited",
      avatarBg: "bg-[#dff7ee] text-[#1f6648]",
    };
    setUsersList([newUser, ...usersList]);
    setInviteEmail("");
    setIsInviteModalOpen(false);
    alert(`Invitation sent to ${inviteEmail} as ${inviteRole}!`);
  };

  const toggleUserStatus = (id: string) => {
    setUsersList(
      usersList.map((u) => {
        if (u.id === id) {
          const nextStatus = u.status === "Active" ? "Suspended" : "Active";
          return { ...u, status: nextStatus };
        }
        return u;
      })
    );
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#828a7c]">
                Admin Console
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

        {/* Sidebar Nav */}
        <div className="mt-8 flex-1">
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#919a8d]">
            Governance & Ops
          </p>
          <nav className="mt-3 space-y-1">
            <button
              onClick={() => {
                setActiveTab("overview");
                setMobileNavOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${
                activeTab === "overview"
                  ? "bg-[#1b221d] text-[#c9f35b] shadow-sm"
                  : "text-[#586154] hover:bg-[#eef2e6] hover:text-[#212720]"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Platform Overview</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("users");
                setMobileNavOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${
                activeTab === "users"
                  ? "bg-[#1b221d] text-[#c9f35b] shadow-sm"
                  : "text-[#586154] hover:bg-[#eef2e6] hover:text-[#212720]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4" />
                <span>Users & Roles</span>
              </div>
              <span className="rounded-full bg-[#e6eadc] px-2 py-0.5 text-[10px] text-[#4d5648]">
                {usersList.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab("sessions");
                setMobileNavOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${
                activeTab === "sessions"
                  ? "bg-[#1b221d] text-[#c9f35b] shadow-sm"
                  : "text-[#586154] hover:bg-[#eef2e6] hover:text-[#212720]"
              }`}
            >
              <div className="flex items-center gap-3">
                <CalendarDays className="h-4 w-4" />
                <span>Live Sessions</span>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-[#10b981]" />
            </button>

            <button
              onClick={() => {
                setActiveTab("settings");
                setMobileNavOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${
                activeTab === "settings"
                  ? "bg-[#1b221d] text-[#c9f35b] shadow-sm"
                  : "text-[#586154] hover:bg-[#eef2e6] hover:text-[#212720]"
              }`}
            >
              <Settings className="h-4 w-4" />
              <span>Commission & Rules</span>
            </button>
          </nav>

          {/* Cross portal links */}
          <div className="mt-8 rounded-2xl border border-[#dfe4d8] bg-[#f8faf3] p-3.5">
            <p className="text-[11px] font-bold text-[#2d352b]">Switch to client views</p>
            <div className="mt-2 space-y-1.5">
              <Link
                href="/student"
                className="flex items-center justify-between rounded-lg px-2 py-1 text-xs text-[#525b4e] hover:bg-[#ebf0e3]"
              >
                <span>Student View</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
              <Link
                href="/parent"
                className="flex items-center justify-between rounded-lg px-2 py-1 text-xs text-[#525b4e] hover:bg-[#ebf0e3]"
              >
                <span>Parent View</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
              <Link
                href="/"
                className="flex items-center justify-between rounded-lg px-2 py-1 text-xs text-[#525b4e] hover:bg-[#ebf0e3]"
              >
                <span>Landing Page</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Admin profile footer */}
        <div className="border-t border-[#e5e8de] pt-4">
          <div className="flex items-center gap-3 px-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1b221d] text-xs font-bold text-white">
              AC
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-[#1f2620]">Alexander Chen</p>
              <p className="truncate text-[11px] text-[#788072]">Super Admin</p>
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

          <div className="relative hidden w-72 sm:block">
            <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8c9487]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users, tutors, sessions..."
              className="w-full rounded-xl border border-[#d9ded2] bg-[#f8f9f3] py-2 pl-9 pr-3 text-xs text-[#202720] outline-none placeholder:text-[#9ea697] focus:border-[#a0b889]"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsInviteModalOpen(true)}
              className="flex items-center gap-1.5 rounded-full bg-[#1b221d] px-4 py-2 text-xs font-bold text-[#c9f35b] hover:bg-[#2c362f]"
            >
              <Plus className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Invite User</span>
            </button>

            <button className="relative rounded-xl border border-[#d9ded2] p-2 text-[#586153] hover:bg-[#f3f5eb]">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#c9f35b]" />
            </button>

            <Link
              href="/"
              className="rounded-full border border-[#d2d7c9] px-3 py-1.5 text-xs font-bold text-[#2a3229] hover:bg-[#eef2e6]"
            >
              Exit to site
            </Link>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="mx-auto max-w-[1400px] p-5 sm:p-8 lg:p-10">
          {/* Eyebrow & Headline */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#868f80]">
                Platform Health & Metrics
              </span>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1a211c] sm:text-3xl">
                Melhik Governance Hub
              </h1>
              <p className="mt-1 text-xs text-[#6e7668]">
                Real-time oversight over 2,847 learners, 186 active calls, and marketplace GMV.
              </p>
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex items-center gap-1 rounded-xl border border-[#d9ded2] bg-[#fffefa] p-1">
              <button
                onClick={() => setActiveTab("overview")}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold ${
                  activeTab === "overview"
                    ? "bg-[#1b221d] text-[#c9f35b]"
                    : "text-[#677061] hover:text-[#1e251e]"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold ${
                  activeTab === "users"
                    ? "bg-[#1b221d] text-[#c9f35b]"
                    : "text-[#677061] hover:text-[#1e251e]"
                }`}
              >
                User Directory
              </button>
              <button
                onClick={() => setActiveTab("sessions")}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold ${
                  activeTab === "sessions"
                    ? "bg-[#1b221d] text-[#c9f35b]"
                    : "text-[#677061] hover:text-[#1e251e]"
                }`}
              >
                Live Sessions
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold ${
                  activeTab === "settings"
                    ? "bg-[#1b221d] text-[#c9f35b]"
                    : "text-[#677061] hover:text-[#1e251e]"
                }`}
              >
                Settings
              </button>
            </div>
          </div>

          {/* Top 4 KPI Stat Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {adminStats.map((stat, idx) => (
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

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="mt-8 space-y-8">
              {/* Live Session Row & Revenue Chart */}
              <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                {/* Active Sessions Panel */}
                <div className="rounded-[26px] border border-[#dbe0d4] bg-[#fffefa] p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#1b221d]">
                        Live & Upcoming Sessions
                      </h3>
                      <p className="text-xs text-[#717a6c]">
                        Active classroom rooms and upcoming bookings today
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-3 py-1 text-[11px] font-bold text-[#166534]">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
                      3 Active Now
                    </span>
                  </div>

                  <div className="mt-5 divide-y divide-[#edf0e7]">
                    {upcomingLessonsData.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex flex-col justify-between gap-3 py-4 sm:flex-row sm:items-center"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl ${lesson.color}`}
                          >
                            <span className="text-sm font-black leading-none">
                              {lesson.day}
                            </span>
                            <span className="mt-0.5 text-[9px] font-bold tracking-wider">
                              {lesson.month}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#1c231e]">
                              {lesson.title}
                            </h4>
                            <p className="mt-0.5 text-[11px] text-[#71796d]">
                              {lesson.person} ({lesson.role}) · {lesson.time}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-[#f1f3ea] px-2.5 py-1 text-[10px] font-bold text-[#454e41]">
                            {lesson.status}
                          </span>
                          <button
                            onClick={() => alert(`Entering observer room for: ${lesson.title}`)}
                            className="rounded-full border border-[#cbd1c2] px-3 py-1 text-[11px] font-bold text-[#202720] hover:bg-[#eef2e5]"
                          >
                            Observe
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue & Volume Chart */}
                <div className="rounded-[26px] border border-[#dbe0d4] bg-[#fffefa] p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#1b221d]">
                        Weekly GMV Volume
                      </h3>
                      <p className="text-xs text-[#717a6c]">Platform booking trends</p>
                    </div>
                    <span className="text-xs font-bold text-[#2e8055]">+$8,420 wk</span>
                  </div>

                  <div className="mt-8 flex h-44 items-end gap-3 px-2">
                    {[
                      { day: "Mon", h: 45, rev: "$5,200" },
                      { day: "Tue", h: 68, rev: "$7,800" },
                      { day: "Wed", h: 54, rev: "$6,100" },
                      { day: "Thu", h: 88, rev: "$9,400" },
                      { day: "Fri", h: 72, rev: "$8,200" },
                      { day: "Sat", h: 96, rev: "$11,500" },
                      { day: "Sun", h: 60, rev: "$6,900" },
                    ].map((bar, i) => (
                      <div key={i} className="group relative flex flex-1 flex-col items-center gap-2">
                        <div
                          className={`w-full rounded-t-xl transition-all duration-300 group-hover:opacity-90 ${
                            i === 5 ? "bg-[#1b221d]" : "bg-[#c9f35b]"
                          }`}
                          style={{ height: `${bar.h}%` }}
                        />
                        <span className="text-[10px] font-bold text-[#868f81]">
                          {bar.day}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[#edf0e7] pt-4 text-xs text-[#6e7769]">
                    <div className="flex justify-between font-semibold">
                      <span>Total Net Commission (15%):</span>
                      <span className="font-bold text-[#1b221d]">$7,243.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: USER DIRECTORY */}
          {(activeTab === "users" || activeTab === "overview") && (
            <div className="mt-8 rounded-[26px] border border-[#dbe0d4] bg-[#fffefa] p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-base font-bold text-[#1b221d]">
                    User Management Directory
                  </h3>
                  <p className="text-xs text-[#717a6c]">
                    Search, filter, and manage permissions across students, tutors, and parents
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-2">
                  {["all", "student", "parent", "tutor"].map((filterRole) => (
                    <button
                      key={filterRole}
                      onClick={() => setUserRoleFilter(filterRole)}
                      className={`rounded-full px-3 py-1 text-xs font-bold capitalize transition-all ${
                        userRoleFilter === filterRole
                          ? "bg-[#1b221d] text-[#c9f35b]"
                          : "bg-[#eef1e6] text-[#555e51] hover:bg-[#e2e6d9]"
                      }`}
                    >
                      {filterRole}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#e6e9df] text-[10px] font-bold uppercase tracking-wider text-[#828b7d]">
                      <th className="pb-3 pl-2">User</th>
                      <th className="pb-3">Role & Level</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Sessions</th>
                      <th className="pb-3">Total Volume</th>
                      <th className="pb-3">Last Active</th>
                      <th className="pb-3 pr-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eef1e7]">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-[#f8f9f3] transition-colors">
                        <td className="py-3.5 pl-2">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold ${user.avatarBg}`}
                            >
                              {user.name.slice(0, 2).toUpperCase()}
                            </span>
                            <div>
                              <p className="font-bold text-[#1b221d]">{user.name}</p>
                              <p className="text-[11px] text-[#737c6f]">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5">
                          <span className="font-semibold text-[#272e25]">{user.role}</span>
                          <span className="block text-[11px] text-[#798174]">{user.grade}</span>
                        </td>
                        <td className="py-3.5">
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                              user.status === "Active" || user.status === "Verified"
                                ? "bg-[#dcfce7] text-[#15803d]"
                                : user.status === "Pending review"
                                ? "bg-[#fef3c7] text-[#b45309]"
                                : "bg-[#fee2e2] text-[#b91c1c]"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3.5 font-semibold text-[#222920]">
                          {user.sessionsCount} sessions
                        </td>
                        <td className="py-3.5 font-bold text-[#1a211b]">
                          {user.totalSpentOrEarned}
                        </td>
                        <td className="py-3.5 text-[#737c6f]">{user.lastActive}</td>
                        <td className="py-3.5 pr-2 text-right">
                          <button
                            onClick={() => toggleUserStatus(user.id)}
                            className="rounded-lg border border-[#ccd2c4] px-2.5 py-1 text-[11px] font-bold text-[#353d32] hover:bg-[#eef2e6]"
                          >
                            {user.status === "Active" ? "Suspend" : "Activate"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: LIVE SESSIONS */}
          {activeTab === "sessions" && (
            <div className="mt-8 rounded-[26px] border border-[#dbe0d4] bg-[#fffefa] p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#1b221d]">Active Audio/Video Rooms</h3>
              <p className="text-xs text-[#717a6c]">
                Classroom monitor and automated speech transcription logs
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    room: "Room #418 - Factoring Quadratics",
                    student: "Jordan Davis (10th)",
                    tutor: "Maya Singh (MIT)",
                    duration: "24 mins in",
                    flag: "Normal",
                  },
                  {
                    room: "Room #419 - AP Chemistry Equilibrium",
                    student: "Emma Wilson (11th)",
                    tutor: "Marcus Vance",
                    duration: "12 mins in",
                    flag: "Normal",
                  },
                  {
                    room: "Room #420 - Creative Writing Thesis",
                    student: "Noah Smith (9th)",
                    tutor: "Sofia Reed",
                    duration: "3 mins in",
                    flag: "Normal",
                  },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-[#dfe3d8] bg-[#f9faf4] p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                        <h4 className="text-xs font-bold text-[#1d241e]">{s.room}</h4>
                      </div>
                      <p className="mt-1 text-xs text-[#636c5f]">
                        Student: <span className="font-semibold text-[#1e251f]">{s.student}</span> · Tutor: <span className="font-semibold text-[#1e251f]">{s.tutor}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#3d453a]">{s.duration}</span>
                      <button
                        onClick={() => alert(`Joined ${s.room} as administrator in silent monitor mode.`)}
                        className="rounded-full bg-[#1b221d] px-4 py-1.5 text-xs font-bold text-[#c9f35b] hover:bg-[#2b352e]"
                      >
                        Join Room
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SETTINGS & RULES */}
          {activeTab === "settings" && (
            <div className="mt-8 rounded-[26px] border border-[#dbe0d4] bg-[#fffefa] p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#1b221d]">Platform Commission & Automation Rules</h3>
              <p className="text-xs text-[#717a6c]">
                Configure marketplace margins and algorithmic tutor routing
              </p>

              <div className="mt-8 max-w-xl space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#232a21]">
                    <span>Platform Service Fee</span>
                    <span className="text-sm font-extrabold text-[#1b221d]">{commissionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="mt-3 w-full accent-[#1b221d]"
                  />
                  <p className="mt-1.5 text-[11px] text-[#7d8677]">
                    Applied automatically to all tutor hourly rates upon parent settlement.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#edf0e7] pt-5">
                  <div>
                    <h4 className="text-xs font-bold text-[#1f2620]">Instant Match Routing</h4>
                    <p className="text-[11px] text-[#71796d]">
                      Automatically ping top 3 rated tutors when student submits question
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={autoMatchEnabled}
                    onChange={(e) => setAutoMatchEnabled(e.target.checked)}
                    className="h-5 w-5 accent-[#1b221d]"
                  />
                </div>

                <div className="flex items-center justify-between border-t border-[#edf0e7] pt-5">
                  <div>
                    <h4 className="text-xs font-bold text-[#1f2620]">Real-time Safety AI</h4>
                    <p className="text-[11px] text-[#71796d]">
                      Scan whiteboard text and transcripts for adherence to safety policies
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={aiSafetyEnabled}
                    onChange={(e) => setAiSafetyEnabled(e.target.checked)}
                    className="h-5 w-5 accent-[#1b221d]"
                  />
                </div>

                <button
                  onClick={() => alert("Platform settings updated successfully!")}
                  className="rounded-full bg-[#1b221d] px-6 py-2.5 text-xs font-bold text-[#c9f35b] hover:bg-[#2c372f]"
                >
                  Save Configuration
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* INVITE USER MODAL */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl border border-[#d8dacf] bg-[#fffefa] p-6 shadow-xl sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#1a211c]">Invite New User</h3>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-[#868f80]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleInviteUser} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#353d32]">User Email</label>
                <input
                  type="email"
                  required
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="colleague@domain.com"
                  className="mt-1.5 w-full rounded-xl border border-[#d6dbcd] bg-[#f9faf4] p-2.5 text-xs outline-none focus:border-[#a0b889]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#353d32]">Platform Role</label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#d6dbcd] bg-[#f9faf4] p-2.5 text-xs outline-none focus:border-[#a0b889]"
                >
                  <option value="Tutor">Tutor / Specialist</option>
                  <option value="Student">Student Learner</option>
                  <option value="Parent">Parent Guardian</option>
                  <option value="Admin">System Administrator</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsInviteModalOpen(false)}
                  className="rounded-full border border-[#ccd2c4] px-4 py-2 text-xs font-bold text-[#3c4538]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#1b221d] px-5 py-2 text-xs font-bold text-[#c9f35b]"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

