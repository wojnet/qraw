"use client"
import { FC, MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import { ChevronDown } from "react-feather";
import NavigationSubItem from './NavigationSubItem';
import { usePathname } from 'next/navigation';

interface INavigationDropdownItem {
  label: string;
  children?: ReactElement<typeof NavigationSubItem> | ReactElement<typeof NavigationSubItem>[]
}

const NavigationDropdownItem: FC<INavigationDropdownItem> = ({ label, children }) => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const pathname = usePathname();

  const onMouseOver: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMenuShown(true);
  }

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMenuShown(false);
  }

  useEffect(() => {
    setIsMenuShown(false);
  }, [pathname]);

  return (
    <div
      className="p-3 cursor-pointer select-none relative"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <span className="text-gray-800 hover:opacity-80 transition-opacity">
        <ChevronDown
          className={`inline-block align-middle mr-2 ${isMenuShown ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
          size={16}
        />
        {label}
      </span>
      <div className={`transition-all duration-300 ${isMenuShown ? "h-auto max-h-max opacity-100 scale-y-100" : "h-0 max-h-0 opacity-0 scale-y-70 pointer-events-none"}`}>
        <div className="min-w-52 bg-white flex flex-col items-stretch shadow-md left-0 top-[calc(100%+10px)] absolute z-10 rounded-lg p-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default NavigationDropdownItem;