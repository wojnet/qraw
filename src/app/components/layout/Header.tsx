import Link from 'next/link';
import { JSX } from 'react';

const Header = (): JSX.Element => {
  return (
    <header className="w-full max-w-[1000px] h-auto flex flex-col items-center mx-auto px-8">
      <div className="w-full h-32 flex items-center justify-between gap-4">
        <Link 
          href="/" 
          className="flex items-center hover:text-gray-700 p-1 translate-y-[-6px] select-none"
        >
          <h1 className="text-gray-900 text-4xl font-bold">
            <span className="text-red-500">
              Q
            </span>
            Raw
          </h1>
        </Link>

        <nav className="flex grow items-center">
          <Link 
            href="/about" 
            className="p-3 group"
          >
            <span className="text-gray-800 group-hover:opacity-80 transition-opacity">About</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;