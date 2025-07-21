import { FC } from 'react';

interface NavigationSubItemDividerProps {
  
}

const NavigationSubItemDivider: FC<NavigationSubItemDividerProps> = ({}) => {
  return (
    <div className="w-full h-[1px] bg-radial from-neutral-300 to-transparent"></div>
  );
}

export default NavigationSubItemDivider;