export type RehabSession = {
  id: string;
  title: string;
  day: string;
  dateLabel: string;
  time: string;
  durationMinutes: number;
  intensity: string;
  location: "Home" | "Clinic";
  focus: string;
  completed?: boolean;
  status?: "scheduled" | "completed" | "flagged";
};

export type PatientProfile = {
  id: string;
  name: string;
  preferredName: string;
  age: number;
  diagnosisContext: string;
  intensity: string;
  duration: string;
  rehabPlan: string;
  streakDays: number;
  accomplishments: string[];
  confidenceNote: string;
  supportCircleCount: number;
};

export type DoctorNote = {
  sourceTitle: string;
  summary: string;
  parsedFields: {
    label: string;
    value: string;
    editable?: boolean;
  }[];
};

export type EncouragementMessage = {
  id: string;
  author: string;
  role: "Family" | "Friend" | "Volunteer";
  relationship: string;
  message: string;
  timeAgo: string;
  approved: boolean;
};

export type CheckinQuestion = {
  id: string;
  question: string;
  type: "scale" | "choice";
  options: string[];
};

export type SessionSummary = {
  id: string;
  patientName: string;
  date: string;
  summary: string;
  symptoms: string[];
  status: "normal" | "flagged";
};

export type VolunteerSubmission = {
  id: string;
  author: string;
  message: string;
  status: "approved" | "review" | "flagged";
  reason: string;
};
