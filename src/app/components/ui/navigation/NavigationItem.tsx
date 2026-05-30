import Link from 'next/link';
import { FC } from 'react';

interface INavigationItem {
  label: string;
  href?: string;
}

const NavigationItem: FC<INavigationItem> = ({ label, href = "/" }) => {
  return (
    <Link
      href={href}
      className="p-3 rounded-md group select-none hover:bg-neutral-100 transition-colors duration-150"
    >
      <span className="text-gray-800 group-hover:opacity-80 transition-opacity">
        {label}
      </span>
    </Link>
  );
}

export default NavigationItem;