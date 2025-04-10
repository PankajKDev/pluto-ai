interface NavLink {
  path: string;
  name: string;
}

interface AuthUser {
  name: string | null;
  img?: string | null;
  email: string[] | null;
}

interface GridPatternProps {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
  className?: string;
}

interface ContentItems {
  isAvailable: boolean;
  textContent: string;
}
interface PricingCardProps {
  title: string;
  pricing: string;
  description: string;
  content: ContentItems[];
}

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface FeedbackParams {
  interviewId: string;
  interviewName: string;
  transcript: { role: string; content: string };
  feedbackId?: string;
}

interface Feedback {
  _id: string;
  totalScore: number;
  interviewId?: string;
  interviewName?: string;
  categoryScores: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: Date;
  updatedAt: Date;
}

interface GetFeedbackByInterviewIdParams {
  interviewId: string;
  userId: string | undefined;
}

interface ILoading {
  isLoading: boolean;
  progress: number;
}
