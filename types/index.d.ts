interface NavLink {
  path: string;
  name: string;
}

interface AuthUser {
  name: string | null;
  img?: string | null;
  email: string[] | null;
}
