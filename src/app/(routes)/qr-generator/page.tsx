import { FC } from 'react';
import QRGenerator from '@components/features/qr-generator/QRGenerator';
import DevtoolsToggle from '@/app/components/ui/devtools/DevtoolsToggle';
import ReduxProvider from '@/lib/redux/ReduxProvider';

interface qrGeneratorPageProps {
  
}

const qrGeneratorPage: FC<qrGeneratorPageProps> = ({}) => {
  return (
    <div className="flex flex-col items-center">
      <ReduxProvider>
        <DevtoolsToggle />
        <QRGenerator />
      </ReduxProvider>
    </div>
  );
}

export default qrGeneratorPage;