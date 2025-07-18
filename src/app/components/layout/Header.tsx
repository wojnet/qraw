import Link from 'next/link';
import { JSX } from 'react';
import NavigationMenu from '../ui/navigation/NavigationMenu';

const Header = (): JSX.Element => {
  return (
    <header className="w-full h-auto flex flex-col items-center px-8">
      <div className="w-full h-24 flex items-center justify-center gap-4">
        <Link 
          href="/" 
          className="w-auto sm:w-1/3 h-full flex justify-start items-end hover:text-gray-700 p-1 translate-y-[-6px] select-none"
        >
          <h1 className="text-gray-900 text-5xl sm:text-4xl font-bold">
            <span className="text-blue-600">
              Q
            </span>
            Raw
          </h1>
        </Link>

        <NavigationMenu
          className="w-1/3 h-full shrink-0 items-end justify-center text-lg hidden sm:flex"
        >
          <Link 
            href="/about" 
            className="p-3 group"
          >
            <span className="text-gray-800 group-hover:opacity-80 transition-opacity">
              Tools &#8964;
            </span>
          </Link>
          <Link 
            href="/about" 
            className="p-3 group"
          >
            <span className="text-gray-800 group-hover:opacity-80 transition-opacity">
              About
            </span>
          </Link>
          <Link 
            href="/about" 
            className="p-3 group"
          >
            <span className="text-gray-800 group-hover:opacity-80 transition-opacity">
              Plans
            </span>
          </Link>
        </NavigationMenu>
        <div className="w-1/3 h-full sm:flex justify-end items-end hidden">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border-1 rounded-full bg-gray-200"></div>
            <button className="text-2xl cursor-pointer">&equiv;</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;