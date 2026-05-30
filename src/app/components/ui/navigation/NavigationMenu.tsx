import { FC, ReactElement } from "react";
import { cn } from "@/app/utils/cn";
import NavigationItem from "./NavigationItem";

interface INavigationMenu {
  children?: ReactElement<typeof NavigationItem> | ReactElement<typeof NavigationItem>[];
  className?: string;
}

const NavigationMenu: FC<INavigationMenu> = ({ children, className = "" }) => {
  return (
    <nav className={cn("flex gap-2 min-w-fit", className)}>
      {children}
    </nav>
  );
}

export default NavigationMenu;