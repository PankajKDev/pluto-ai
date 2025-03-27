"use client";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const MobileMenuButton = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: VoidFunction;
}) => (
  <Button
    variant="ghost"
    size="icon"
    onClick={toggleMenu}
    className="inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
  >
    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </Button>
);
export default MobileMenuButton;
