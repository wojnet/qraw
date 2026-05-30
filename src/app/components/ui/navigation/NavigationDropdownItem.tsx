"use client"
import { FC, MouseEventHandler, ReactElement, useState } from 'react';
import { ChevronDown } from "react-feather";
import NavigationSubItem from './NavigationSubItem';

interface INavigationDropdownItem {
  label: string;
  children?: ReactElement<typeof NavigationSubItem> | ReactElement<typeof NavigationSubItem>[]
}

const NavigationDropdownItem: FC<INavigationDropdownItem> = ({ label, children }) => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const onMouseOver: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMenuShown(true);
  }

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMenuShown(false);
  }

  return (
    <div
      className="p-3 rounded-md cursor-pointer select-none relative hover:bg-neutral-100 transition-colors duration-150"
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
      <div className={`transition-all duration-200 ${isMenuShown ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="min-w-52 bg-white flex flex-col items-stretch border border-neutral-100 shadow-lg left-0 top-[100%] absolute z-10 rounded-xl p-1.5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default NavigationDropdownItem;