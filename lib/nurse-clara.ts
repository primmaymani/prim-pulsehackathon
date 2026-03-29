export function getNurseClaraReply(message: string) {
  const input = message.toLowerCase().trim();

  if (!input) {
    return "I am here with you, dear. You can ask about today’s plan, your check-in, or when to contact the care team.";
  }

  if (input.includes("who are you") || input.includes("what can you do")) {
    return "I am Nurse Clara, your warm support companion. I can explain your plan, repeat instructions, encourage you, and help hand concerns to the care team. I am not a doctor, and I do not give medical advice.";
  }

  if (input.includes("plan") || input.includes("today") || input.includes("schedule")) {
    return "Today’s plan is a gentle routine with simple pacing. You can tap an activity in Home, follow the timer in Focus Mode, and answer the short check-in when you finish.";
  }

  if (input.includes("walk") || input.includes("exercise") || input.includes("session")) {
    return "Please follow the activity your care team already set for you. I can repeat the steps and help you move through the session calmly, but I do not change your exercise plan.";
  }

  if (
    input.includes("dizzy") ||
    input.includes("dizziness") ||
    input.includes("chest") ||
    input.includes("pressure") ||
    input.includes("short of breath") ||
    input.includes("breathless")
  ) {
    return "Thank you for telling me. That sounds important, and I want to be careful. I can help mark this for your care team right away, but I cannot give medical advice.";
  }

  if (input.includes("sad") || input.includes("worried") || input.includes("anxious") || input.includes("afraid")) {
    return "It is alright to feel that way. You are not alone in this. We can take things one step at a time, and I can stay with you through your next small step.";
  }

  if (input.includes("check-in") || input.includes("questions")) {
    return "The check-in is five short questions about energy, breathing, dizziness, chest discomfort, and confidence. It helps your care team stay informed after your session.";
  }

  return "I can help explain today’s routine, repeat your session steps, or help you share concerns with the care team. If something feels worrying, I can help flag it for follow-up.";
}
