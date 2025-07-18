import { JSX, ReactNode } from "react";
import { cn } from "@/app/utils/cn";

interface INavigationMenu {
  children?: ReactNode;
  className?: string;
}

const NavigationMenu = ({ children, className = "" }: INavigationMenu): JSX.Element => {
  return (
    <nav className={cn("flex gap-2 min-w-fit", className)}>
      {children}
    </nav>
  );
}

export default NavigationMenu;