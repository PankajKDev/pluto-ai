"use client";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
const MobileMenu = ({
  navLinks,
  navAuthLinks,
}: {
  navLinks: NavLink[];
  navAuthLinks: NavLink[];
}) => {
  const { user } = useUser();
  const userObject = {
    name: user?.fullName,
    email: user?.primaryEmailAddress?.emailAddress,
    image: user?.imageUrl,
  };
  return (
    <div className="sm:hidden border-t border-muted">
      <div className="pt-2 pb-3 space-y-1">
        <SignedIn>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4 pb-3 border-t border-muted">
            <div className="flex items-center px-4">
              <UserButton />
              <div className="ml-3">
                <div className="text-base font-medium text-foreground">
                  {userObject.name}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {userObject.email}
                </div>
              </div>
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          {navAuthLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </SignedOut>
      </div>
    </div>
  );
};
export default MobileMenu;
