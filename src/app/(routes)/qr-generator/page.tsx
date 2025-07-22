import { FC } from 'react';
import QRGenerator from '@components/features/qr-generator/QRGenerator';

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center px-10 mt-10">
      <QRGenerator />
    </div>
  );
}

export default page;