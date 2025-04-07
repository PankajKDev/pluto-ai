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
  searchParans: Promise<Record<string, string>>;
}

interface FeedbackParams {
  interviewId: string;
  userId: string;
  transcript: { role: string; content: string };
  feedbackId?: string;
}
