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
    path: "/pricing",
    name: "Pricing",
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
    title: "Progress Tracking Dashboard",
    description:
      "Monitor your learning journey with a dashboard that tracks completed courses and upcoming practice sessions.",
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

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  webflow: "webflow",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

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
