import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  CircleDollarSign,
  LayoutDashboard,
  Settings,
  Users,
  Shield,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export type Role = "admin" | "student" | "parent" | "tutor";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export interface RoleConfig {
  label: string;
  role: Role;
  eyebrow: string;
  greeting: string;
  description: string;
  avatar: string;
  userEmail: string;
  nav: NavItem[];
}

export const roleConfig: Record<Role, RoleConfig> = {
  admin: {
    label: "Admin",
    role: "admin",
    eyebrow: "Platform Governance & Analytics",
    greeting: "Good morning, Alex",
    description: "Here’s platform health, active sessions, and revenue performance today.",
    avatar: "AC",
    userEmail: "alex.admin@melhik.edu",
    nav: [
      { label: "Overview", href: "/admin", icon: LayoutDashboard },
      { label: "Users & Roles", href: "/admin#users", icon: Users, badge: "2,847" },
      { label: "Live Sessions", href: "/admin#sessions", icon: CalendarDays, badge: "Live" },
      { label: "Financials", href: "/admin#financials", icon: CircleDollarSign },
      { label: "Platform Health", href: "/admin#reports", icon: BarChart3 },
      { label: "Settings", href: "/admin#settings", icon: Settings },
    ],
  },
  student: {
    label: "Student",
    role: "student",
    eyebrow: "Your Personal Learning Space",
    greeting: "Hey Jordan, ready to get unstuck?",
    description: "Pick up where you left off. Your notes, practice, and tutors are waiting.",
    avatar: "JD",
    userEmail: "jordan.davis@student.org",
    nav: [
      { label: "Overview", href: "/student", icon: LayoutDashboard },
      { label: "My Learning Threads", href: "/student#threads", icon: BookOpen, badge: "3 active" },
      { label: "Upcoming Lessons", href: "/student#lessons", icon: CalendarDays, badge: "Today" },
      { label: "Find a Tutor", href: "/ask", icon: Users },
      { label: "Practice Sandbox", href: "/student#practice", icon: Sparkles },
      { label: "Account Settings", href: "/student#settings", icon: Settings },
    ],
  },
  parent: {
    label: "Parent",
    role: "parent",
    eyebrow: "Family Learning Dashboard",
    greeting: "Welcome back, Taylor",
    description: "A transparent view of Jordan’s progress, upcoming sessions, and tutor feedback.",
    avatar: "TD",
    userEmail: "taylor.davis@family.org",
    nav: [
      { label: "Family Overview", href: "/parent", icon: LayoutDashboard },
      { label: "Progress Reports", href: "/parent#progress", icon: BarChart3, badge: "Updated" },
      { label: "Lesson Schedule", href: "/parent#schedule", icon: CalendarDays },
      { label: "Tutor Messages", href: "/parent#messages", icon: HeartHandshake, badge: "1 new" },
      { label: "Billing & Receipts", href: "/parent#billing", icon: CircleDollarSign },
      { label: "Family Settings", href: "/parent#settings", icon: Settings },
    ],
  },
  tutor: {
    label: "Tutor",
    role: "tutor",
    eyebrow: "Educator Workspace",
    greeting: "Hello, Maya",
    description: "Your schedule, student threads, and lesson earnings.",
    avatar: "MS",
    userEmail: "maya.singh@tutors.melhik.edu",
    nav: [
      { label: "Overview", href: "/admin", icon: LayoutDashboard },
      { label: "Students", href: "/admin#users", icon: Users },
      { label: "Schedule", href: "/admin#sessions", icon: CalendarDays },
      { label: "Earnings", href: "/admin#financials", icon: CircleDollarSign },
      { label: "Profile", href: "/admin#settings", icon: Settings },
    ],
  },
};

// Admin Platform Stats
export const adminStats = [
  { label: "Total active learners", value: "2,847", change: "+14.2% vs last mo", tone: "mint" },
  { label: "Live ongoing sessions", value: "186", change: "98.4% satisfaction", tone: "lavender" },
  { label: "Monthly platform GMV", value: "$48,290", change: "+18.8% growth", tone: "peach" },
  { label: "Tutor match rate", value: "94.2%", change: "Avg 4 min match", tone: "blue" },
];

// Student Stats
export const studentStats = [
  { label: "Active learning streak", value: "12 days 🔥", change: "+3 days record", tone: "mint" },
  { label: "Algebra II mastery", value: "82%", change: "+14% this month", tone: "lavender" },
  { label: "Sessions completed", value: "8 sessions", change: "Next today 2:30 PM", tone: "peach" },
  { label: "Time invested", value: "24.5 hrs", change: "Goal: 30 hrs/mo", tone: "blue" },
];

// Parent Stats
export const parentStats = [
  { label: "Overall curriculum progress", value: "78%", change: "+9.4% this quarter", tone: "mint" },
  { label: "Sessions booked this month", value: "6 sessions", change: "Next: Today at 2:30 PM", tone: "lavender" },
  { label: "Tuition spend (June)", value: "$320.00", change: "Within $400 budget limit", tone: "peach" },
  { label: "Direct tutor notes", value: "4 recaps", change: "All positive milestones", tone: "blue" },
];

// Upcoming Lessons
export const upcomingLessonsData = [
  {
    id: "l-1",
    day: "18",
    month: "JUN",
    time: "02:30 PM",
    subject: "Mathematics",
    title: "Algebra II · Factoring Quadratics & Roots",
    person: "Maya Singh",
    role: "Senior Math Specialist",
    rating: 4.9,
    status: "Upcoming in 45m",
    color: "bg-[#dff7ee] text-[#1b6a4a]",
    avatar: "MS",
    roomUrl: "#join-room",
  },
  {
    id: "l-2",
    day: "20",
    month: "JUN",
    time: "10:00 AM",
    subject: "Physics",
    title: "AP Physics · Kinematics & Vector Equations",
    person: "Daniel Kim",
    role: "Physics & Calculus Mentor",
    rating: 4.8,
    status: "Confirmed",
    color: "bg-[#eee9ff] text-[#4f3da3]",
    avatar: "DK",
    roomUrl: "#join-room",
  },
  {
    id: "l-3",
    day: "22",
    month: "JUN",
    time: "04:15 PM",
    subject: "English",
    title: "Essay Structure · Thesis Formulation & Evidence",
    person: "Sofia Reed",
    role: "Literature & Academic Writing",
    rating: 5.0,
    status: "Scheduled",
    color: "bg-[#fff0e5] text-[#934415]",
    avatar: "SR",
    roomUrl: "#join-room",
  },
];

// Recommended Tutors
export const recommendedTutorsData = [
  {
    id: "t-1",
    name: "Maya Singh",
    subject: "Mathematics & Algebra",
    bio: "Ex-MIT researcher who loves breaking complex formulas into intuitive visual steps.",
    rating: "4.9",
    reviewsCount: 142,
    price: "$38/hr",
    initials: "MS",
    badge: "Top Rated",
    accent: "bg-[#dff7ee] text-[#227252]",
    tags: ["Patient", "Visual Learner Friendly", "SAT Prep"],
  },
  {
    id: "t-2",
    name: "Daniel Kim",
    subject: "Physics & Coding",
    bio: "Passionate about making mechanics and Python programming click with real-life projects.",
    rating: "4.8",
    reviewsCount: 98,
    price: "$42/hr",
    initials: "DK",
    badge: "Popular",
    accent: "bg-[#eee9ff] text-[#4e3fa3]",
    tags: ["Interactive Demos", "AP Physics", "Python"],
  },
  {
    id: "t-3",
    name: "Sofia Reed",
    subject: "English Literature",
    bio: "Helps students craft clear thesis statements, analyze poetry, and build confidence.",
    rating: "5.0",
    reviewsCount: 116,
    price: "$35/hr",
    initials: "SR",
    badge: "Grammar Pro",
    accent: "bg-[#fff0e5] text-[#924719]",
    tags: ["Essay Polish", "Creative Writing", "College Essays"],
  },
  {
    id: "t-4",
    name: "Marcus Vance",
    subject: "Chemistry & Biology",
    bio: "Specializes in reaction stoichiometry and cellular biology with memory hooks.",
    rating: "4.9",
    reviewsCount: 84,
    price: "$40/hr",
    initials: "MV",
    badge: "STEM Star",
    accent: "bg-[#e2f4fb] text-[#1b6b85]",
    tags: ["Organic Chem", "Biochem", "Step-by-Step"],
  },
];

// Admin Users Table Data
export const adminUsersData = [
  {
    id: "usr-01",
    name: "Jordan Davis",
    email: "jordan.davis@student.org",
    role: "Student",
    grade: "Grade 10",
    status: "Active",
    sessionsCount: 18,
    totalSpentOrEarned: "$684",
    lastActive: "10 mins ago",
    avatarBg: "bg-[#dff7ee] text-[#1f6648]",
  },
  {
    id: "usr-02",
    name: "Taylor Davis",
    email: "taylor.davis@family.org",
    role: "Parent",
    grade: "Parent of Jordan",
    status: "Active",
    sessionsCount: 18,
    totalSpentOrEarned: "$684",
    lastActive: "2 hours ago",
    avatarBg: "bg-[#fff0e5] text-[#8e4518]",
  },
  {
    id: "usr-03",
    name: "Maya Singh",
    email: "maya.singh@tutors.melhik.edu",
    role: "Tutor",
    grade: "Master Tutor",
    status: "Verified",
    sessionsCount: 142,
    totalSpentOrEarned: "$5,396",
    lastActive: "Just now",
    avatarBg: "bg-[#eee9ff] text-[#553fa6]",
  },
  {
    id: "usr-04",
    name: "Daniel Kim",
    email: "daniel.kim@tutors.melhik.edu",
    role: "Tutor",
    grade: "Senior Tutor",
    status: "Verified",
    sessionsCount: 98,
    totalSpentOrEarned: "$4,116",
    lastActive: "Yesterday",
    avatarBg: "bg-[#e2f4fb] text-[#1a667f]",
  },
  {
    id: "usr-05",
    name: "Emma Wilson",
    email: "emma.w@school.edu",
    role: "Student",
    grade: "Grade 11",
    status: "Active",
    sessionsCount: 12,
    totalSpentOrEarned: "$456",
    lastActive: "3 days ago",
    avatarBg: "bg-[#f4eefb] text-[#5b3c8f]",
  },
  {
    id: "usr-06",
    name: "Noah Smith",
    email: "noah.smith@student.org",
    role: "Student",
    grade: "Grade 9",
    status: "Pending review",
    sessionsCount: 2,
    totalSpentOrEarned: "$76",
    lastActive: "5 days ago",
    avatarBg: "bg-[#fef3c7] text-[#92400e]",
  },
];

// Interactive Subject Showcase Demos (Used in Landing Page & Student page)
export const subjectDemos = [
  {
    id: "maths",
    subject: "Maths",
    iconKey: "x²",
    subtext: "From fractions to functions",
    questionBadge: "YOUR QUESTION · ALGEBRA",
    question: "Why do we do the same thing to both sides?",
    concept: "Think of an equation like a balance scale.",
    steps: [
      { equation: "2(x + 3) = 14", annotation: "Start here" },
      { equation: "x + 3 = 7", annotation: "Divide both sides by 2 to balance" },
      { equation: "x = 4", annotation: "Subtract 3 from both sides", highlight: true },
    ],
    takeaway: "Whatever operation you perform to keep one side equal must happen on the other.",
  },
  {
    id: "science",
    subject: "Science",
    iconKey: "H₂O",
    subtext: "Make the why make sense",
    questionBadge: "YOUR QUESTION · CHEMISTRY",
    question: "Why is water a liquid at room temperature while CO₂ is a gas?",
    concept: "Hydrogen bonding creates strong intermolecular bridges.",
    steps: [
      { equation: "O—H covalent bond", annotation: "Strong internal dipole attraction" },
      { equation: "δ- Oxygen ↔ δ+ Hydrogen", annotation: "Forms intermolecular lattice" },
      { equation: "High boiling point (100°C)", annotation: "Keeps molecules clustered as liquid", highlight: true },
    ],
    takeaway: "The polar shape of H₂O creates magnetic sticky forces that CO₂ lacks.",
  },
  {
    id: "english",
    subject: "English",
    iconKey: "Aa",
    subtext: "Find your words and your voice",
    questionBadge: "YOUR QUESTION · ESSAY WRITING",
    question: "How do I turn a vague idea into a sharp thesis statement?",
    concept: "Claim + Reason + Consequence formula.",
    steps: [
      { equation: "Raw thought: 'Social media is bad'", annotation: "Too vague and opinion-based" },
      { equation: "Add specific cause: 'Algorithmic curation'", annotation: "Identifies the core mechanism" },
      { equation: "Sharp thesis: 'Algorithmic curation fractures youth focus by prioritizing outrage over depth'", annotation: "Debatable, specific & grounded", highlight: true },
    ],
    takeaway: "A great thesis predicts the whole essay's argument in one clean sentence.",
  },
  {
    id: "coding",
    subject: "Coding",
    iconKey: "</>",
    subtext: "Turn errors into understanding",
    questionBadge: "YOUR QUESTION · JAVASCRIPT",
    question: "Why does my loop return 'undefined' on the last item?",
    concept: "Zero-indexed arrays versus array length count.",
    steps: [
      { equation: "arr = ['a', 'b', 'c'] (length is 3)", annotation: "Indices are 0, 1, 2" },
      { equation: "for (let i = 0; i <= arr.length; i++)", annotation: "i reaches 3, which doesn't exist!" },
      { equation: "Fix: i < arr.length", annotation: "Loops strictly up to index 2", highlight: true },
    ],
    takeaway: "Always use < length when traversing 0-indexed lists to avoid out-of-bounds reads.",
  },
];

// Interactive Learning Thread for Student
export const currentLearningThread = {
  title: "Quadratics, made clearer.",
  topic: "Algebra II · Factoring quadratics",
  tutor: "Worked through with Maya",
  date: "Yesterday at 4:15 PM",
  badge: "Session saved",
  ahaMoment: "Factoring is simply finding the pieces that multiply together to build your original polynomial.",
  breakdown: [
    { rule: "General form", formula: "x² + bx + c = 0" },
    { rule: "Our target", formula: "x² + 5x + 6 = 0" },
    { rule: "The secret", note: "Find two numbers (p, q) that add to 5 and multiply to 6" },
    { rule: "The pair", formula: "2 and 3 (since 2 + 3 = 5 and 2 × 3 = 6)" },
    { rule: "Factored form", formula: "(x + 2)(x + 3) = 0  ⟶  x = -2 or x = -3" },
  ],
  practiceQuestion: {
    prompt: "Factor x² + 7x + 12 = 0",
    hint: "Which two numbers add to 7 and multiply to 12?",
    options: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x - 3)(x - 4)"],
    correctIndex: 0,
    explanation: "3 + 4 = 7, and 3 × 4 = 12! Perfect job! Solutions are x = -3 and x = -4.",
  },
};

// Parent progress report
export const parentProgressReports = [
  {
    subject: "Algebra II & Functions",
    tutor: "Maya Singh",
    score: 85,
    status: "Mastered",
    recentTopic: "Quadratic factoring & parabolic vertices",
    tutorNote: "Jordan had a breakthrough moment connecting graphical parabolas with algebraic factoring. Ready for the next unit!",
    date: "June 17",
  },
  {
    subject: "AP Physics 1",
    tutor: "Daniel Kim",
    score: 74,
    status: "In Progress",
    recentTopic: "2D Kinematics & Projectile Motion",
    tutorNote: "Understands horizontal velocity conservation well; practicing angled projectile vectors this week.",
    date: "June 15",
  },
  {
    subject: "Academic Writing & Literature",
    tutor: "Sofia Reed",
    score: 92,
    status: "Excelling",
    recentTopic: "Comparative analytical essays",
    tutorNote: "Drafted a stellar comparative thesis on Gatsby. High level of textual precision.",
    date: "June 12",
  },
];

// Compatibility aliases
export const recommendedTutors = recommendedTutorsData;
export const upcomingLessons = upcomingLessonsData;
export const students = [
  { name: "Jordan Davis", detail: "Algebra II", progress: 82, initials: "JD", color: "bg-[#dff7ee]" },
  { name: "Emma Wilson", detail: "SAT Math", progress: 64, initials: "EW", color: "bg-[#eee9ff]" },
  { name: "Noah Smith", detail: "Geometry", progress: 47, initials: "NS", color: "bg-[#fff0e5]" },
];
export const statsByRole: Record<Role, { label: string; value: string; change: string; tone: string }[]> = {
  admin: adminStats,
  tutor: [
    { label: "This month", value: "$2,840", change: "+14.2%", tone: "mint" },
    { label: "Lessons taught", value: "42", change: "+6.8%", tone: "lavender" },
    { label: "Active students", value: "18", change: "+2.1%", tone: "peach" },
    { label: "Avg. rating", value: "4.9", change: "+0.2", tone: "blue" },
  ],
  student: studentStats,
  parent: parentStats,
};

export const faqsList = [
  {
    question: "How does in-person session tracking work on Melhik?",
    answer:
      "Your tutor meets with the student in person for face-to-face instruction. After each session, the tutor logs attendance, topics covered, student comprehension, and homework directly onto Melhik for complete transparency.",
  },
  {
    question: "How do parents monitor face-to-face tutoring sessions?",
    answer:
      "Parents have a dedicated Family Dashboard where they can view verified session logs, tutor notes, attendance history, and subject progress without having to interrupt the lesson.",
  },
  {
    question: "How does Melhik help students between in-person lessons?",
    answer:
      "Students can review in-person lesson recaps, track upcoming session dates, practice recommended problem sets, and prepare specific questions for their tutor's next visit.",
  },
  {
    question: "How do administrators maintain tutoring quality and safety?",
    answer:
      "Melhik admins supervise all active in-person tutor pairings, verify tutor credentials, review session completion logs, and track student satisfaction and progress across the platform.",
  },
  {
    question: "Can tutors easily manage multiple in-person students?",
    answer:
      "Yes! Tutors have a streamlined dashboard to organize student rosters, log session hours, record lesson milestones, and communicate feedback directly to parents and admins.",
  },
];
