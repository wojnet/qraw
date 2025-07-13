import { JSX } from "react";
import QRGenerator from "./components/features/qr-generator/QRGenerator";

const Home = (): JSX.Element => {
  return (
    <div>
      <main className="w-full max-w-[1000px] mx-auto flex flex-col items-center px-10">
        <QRGenerator />
      </main>
    </div>
  );
}

export default Home;
