import type {
  CheckinQuestion,
  DoctorNote,
  EncouragementMessage,
  PatientProfile,
  RehabSession,
  SessionSummary,
  VolunteerSubmission
} from "@/lib/types";

export const patientProfile: PatientProfile = {
  id: "pt-1001",
  name: "Maria Alvarez",
  preferredName: "Maria",
  age: 71,
  diagnosisContext: "Coming home after a heart failure hospitalization and beginning cardiac rehab.",
  intensity: "Light to moderate walking with guided rest breaks",
  duration: "15 to 30 minutes",
  rehabPlan: "Three sessions each week, with two completed at home and one completed with the rehab program.",
  streakDays: 5,
  accomplishments: [
    "Completed 8 sessions so far",
    "Shared progress with 4 supporters",
    "Finished every check-in this month"
  ],
  confidenceNote: "You are building a steady routine, one calm step at a time.",
  supportCircleCount: 9
};

export const doctorNote: DoctorNote = {
  sourceTitle: "Discharge Plan + Cardiac Rehab Referral",
  summary:
    "Referral reviewed. Home-based rehab may be used for two of three weekly sessions with guided pacing and symptom check-ins.",
  parsedFields: [
    { label: "Patient name", value: "Maria Alvarez", editable: true },
    { label: "Age", value: "71", editable: true },
    { label: "Referral context", value: "Heart failure follow-up with cardiac rehab referral", editable: true },
    { label: "Suggested exercise intensity", value: "Light to moderate", editable: true },
    { label: "Suggested exercise duration", value: "15 to 30 minutes", editable: true },
    { label: "Hybrid rehab plan", value: "2 home sessions + 1 program session each week", editable: true }
  ]
};

export const weeklySchedule: RehabSession[] = [
  {
    id: "session-1",
    title: "Go on a walk",
    day: "Mon",
    dateLabel: "Mar 30",
    time: "09:00",
    durationMinutes: 15,
    intensity: "Light to moderate",
    location: "Home",
    focus: "Gentle warm-up, easy walking, and cool-down",
    completed: true,
    status: "completed"
  },
  {
    id: "session-2",
    title: "Breathing and stretch break",
    day: "Wed",
    dateLabel: "Apr 1",
    time: "11:00",
    durationMinutes: 10,
    intensity: "Light",
    location: "Home",
    focus: "Seated breathing and gentle shoulder stretches",
    status: "scheduled"
  },
  {
    id: "session-3",
    title: "Easy indoor cycling",
    day: "Fri",
    dateLabel: "Apr 3",
    time: "14:00",
    durationMinutes: 12,
    intensity: "Light",
    location: "Home",
    focus: "Light pedaling with rest breaks",
    status: "scheduled"
  }
];

export const encouragementMessages: EncouragementMessage[] = [
  {
    id: "enc-1",
    author: "Elena Alvarez",
    role: "Family",
    relationship: "Daughter",
    message: "You are doing beautifully, Mom. One small step at a time is still progress.",
    timeAgo: "10 minutes ago",
    approved: true
  },
  {
    id: "enc-2",
    author: "Jon Ruiz",
    role: "Friend",
    relationship: "Neighbor",
    message: "Thinking of you today. Your steady routine is something to feel proud of.",
    timeAgo: "1 hour ago",
    approved: true
  },
  {
    id: "enc-3",
    author: "Volunteer Anna",
    role: "Volunteer",
    relationship: "Approved community volunteer",
    message: "One calm session at a time adds up. Wishing you a peaceful recovery day.",
    timeAgo: "Today",
    approved: true
  }
];

export const volunteerMessages: VolunteerSubmission[] = [
  {
    id: "vol-1",
    author: "Anna L.",
    message: "You are doing meaningful work for your future self. Sending a warm hello from the community team.",
    status: "approved",
    reason: "Supportive and appropriate"
  },
  {
    id: "vol-2",
    author: "Marcus D.",
    message: "Wishing you a calm day and a little extra confidence before your next session.",
    status: "review",
    reason: "Pending final moderation review"
  },
  {
    id: "vol-3",
    author: "Unknown volunteer",
    message: "Skip your program session and push much harder today.",
    status: "flagged",
    reason: "Attempts to override care plan"
  }
];

export const checkinQuestions: CheckinQuestion[] = [
  {
    id: "q1",
    question: "How is your energy feeling right now?",
    type: "choice",
    options: ["Very low", "A little low", "About right", "Strong"]
  },
  {
    id: "q2",
    question: "Did you feel more short of breath than you expected today?",
    type: "choice",
    options: ["No", "A little", "Yes, more than expected"]
  },
  {
    id: "q3",
    question: "Did you notice dizziness or feeling unsteady during the session?",
    type: "choice",
    options: ["No", "Briefly", "Yes"]
  },
  {
    id: "q4",
    question: "Did you feel any chest discomfort or unusual pressure?",
    type: "choice",
    options: ["No", "Mild", "Yes"]
  },
  {
    id: "q5",
    question: "How confident do you feel about doing your next session at home?",
    type: "scale",
    options: ["1", "2", "3", "4", "5"]
  }
];

export const sessionSummaries: SessionSummary[] = [
  {
    id: "sum-1",
    patientName: "Maria Alvarez",
    date: "2026-03-28",
    summary: "Completed a 22-minute home walking session with stable pacing and a calm cool-down.",
    symptoms: ["No chest discomfort", "Mild expected breathlessness"],
    status: "normal"
  },
  {
    id: "sum-2",
    patientName: "Maria Alvarez",
    date: "2026-03-26",
    summary: "Session stopped early after the patient reported dizziness and unexpected shortness of breath during activity.",
    symptoms: ["Dizziness", "Unexpected shortness of breath"],
    status: "flagged"
  }
];

export const wearableMetrics = {
  heartRate: "96 bpm",
  steps: "1,284",
  duration: "12:42",
  oxygenSaturation: "97%"
};

export const nurseClaraPrompts = {
  onboarding:
    "Hello dear, I can help read the note your care team gave you. We will keep it simple together, and you can change anything that does not look right.",
  training:
    "We will take this gently. Follow your plan, pause if you need a moment, and I will stay with you through each step.",
  checkin:
    "Before we celebrate today, I have five short questions so your care team can stay informed."
};

export const patientContext = {
  patientName: "Maria",
  sessionsCompleted: 8,
  totalSessions: 36,
  streak: 5,
  lastActivity: "15-min walk",
  careTeamGoals: "30-min walks 3x/week, gentle stretching daily",
  redFlagTriggered: false
};
