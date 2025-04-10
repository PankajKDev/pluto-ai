import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/courses",
    name: "Courses",
  },
  {
    path: "/interview",
    name: "Interview",
  },
  {
    path: "/feedbacks",
    name: "Feedbacks",
  },
];

export const navAuthLinks = [
  {
    path: "/sign-in",
    name: "Sign In",
  },
  {
    path: "/sign-up",
    name: "Sign Up",
  },
];

export const dataGrid = [
  {
    title: "Personalized Course Recommendations",
    description:
      "Receive tailored course suggestions based on your skills and career goals to maximize your interview preparation.",
  },
  {
    title: "Mock Interview Simulations",
    description:
      "Practice with realistic mock interviews powered by AI, designed to help you improve your responses and confidence.",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Get instant feedback on your performance during mock interviews, highlighting strengths and areas for improvement.",
  },

  {
    title: "Access Old Feedbacks",
    description:
      "Monitor your learning journey with your past feedbacks on our feedbacks page",
  },
  {
    title: "Expert Insights",
    description: "Get Insights from AI about your Interview",
  },
  {
    title: "Flexible Learning Schedule",
    description:
      "Study at your own pace with on-demand courses that fit seamlessly into your busy lifestyle.",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    image: "/avatars/sarah.jpg",
    quote:
      "Pluto AI's interview practice helped me land my dream job. The AI feedback was incredibly precise and helped me improve significantly.",
    initials: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Full Stack Developer",
    image: "/avatars/micahel.jpg",
    quote:
      "Pluto AI helped me to be more articulate so I can do better in Interviews.",
    initials: "MR",
  },
  {
    name: "Emily Thompson",
    role: "Data Scientist",
    image: "/avatars/emily.jpg",
    quote:
      "The quality of courses and AI-driven feedback have accelerated my learning journey. Highly recommend for anyone in tech.",
    initials: "ET",
  },
];

export const FreeTier = [
  {
    isAvailable: true,
    textContent: "4 Interviews per month",
  },
  {
    isAvailable: true,
    textContent: "Basic analytics",
  },
  {
    isAvailable: true,
    textContent: "Limited storage",
  },
  {
    isAvailable: false,
    textContent: "Advanced reporting",
  },
  {
    isAvailable: false,
    textContent: "Premium support",
  },
];

export const PremiumTier = [
  {
    isAvailable: true,
    textContent: "Unlimited interview sessions",
  },
  {
    isAvailable: true,
    textContent: "Advanced analytics",
  },
  {
    isAvailable: true,
    textContent: "Unlimited storage",
  },
  {
    isAvailable: true,
    textContent: "Priority support",
  },
  {
    isAvailable: true,
    textContent: "Custom reporting",
  },
  {
    isAvailable: true,
    textContent: "AI-powered insights",
  },
];

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});
