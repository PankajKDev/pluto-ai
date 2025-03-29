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
