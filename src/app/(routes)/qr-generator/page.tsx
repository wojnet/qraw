import { FC } from 'react';
import ReduxProvider from '../../../../lib/redux/ReduxProvider';
import QRGenerator from '@/app/components/features/qr-generator/QRGenerator';
import DevtoolsToggle from '@/app/components/ui/devtools/DevtoolsToggle';

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