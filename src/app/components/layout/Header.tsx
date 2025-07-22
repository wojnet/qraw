import Link from 'next/link';
import { JSX } from 'react';
import NavigationMenu from '@components/ui/navigation/NavigationMenu';
import MainLogo from '@components/ui/logos/MainLogo';
import MockProfilePicture from '@components/ui/mock/MockProfilePicture';
import NavigationItem from '@components/ui/navigation/NavigationItem';
import NavigationDropdownItem from '@components/ui/navigation/NavigationDropdownItem';
import NavigationSubItem from '@components/ui/navigation/NavigationSubItem';
import NavigationSubItemDivider from '@components/ui/navigation/NavigationSubItemDivider';

const Header = (): JSX.Element => {
  return (
    <header className="w-full h-auto flex flex-col items-center px-8">
      <div className="w-full h-24 flex items-center justify-center gap-4">
        <div 
          className="w-auto h-full flex justify-start items-end p-1 select-none"
        >
          <MainLogo/>
        </div>
        
        <NavigationMenu className="h-full grow shrink-0 items-end justify-start text-lg hidden sm:flex">
          <NavigationDropdownItem label="Tools">
            <NavigationSubItem
              href="/qr-generator"
              label="QRGenerator"
            />
            <NavigationSubItemDivider />
            <NavigationSubItem
              href="/"
              label="ConcreteHelper"
            />
            <NavigationSubItemDivider />
            <NavigationSubItem
              href="/"
              label="ImageCropper"
            />
          </NavigationDropdownItem>
          <NavigationItem
            label="About"
            href="/"
          />
          <NavigationItem
            label="Plans"
            href="/"
          />
        </NavigationMenu>
        
        <div className="h-full sm:flex justify-end items-end hidden">
          <div className="flex items-center gap-4">
            <MockProfilePicture />
            <button className="text-2xl cursor-pointer">&equiv;</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;