import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { FC } from "react";

interface IMainLogo {
  className?: string;
}

const MainLogo: FC<IMainLogo>  = ({ className }) => {
  return (
    <Link
      className={cn("text-gray-900 text-5xl sm:text-4xl font-bold", className)}
      href="/" 
    >
      <h1 className="p-4 translate-y-[8px]">
        <span className="text-blue-600">
          Q
        </span>
        Raw
      </h1>
    </Link>
  );
}

export default MainLogo;