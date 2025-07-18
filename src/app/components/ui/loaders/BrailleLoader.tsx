"use client"
import { cn } from "@/app/utils/cn";
import { useState, useEffect } from "react";

interface IBrailleLoader {
  className?: string,
}

const BrailleLoader = ({ className }: IBrailleLoader) => {
  const brailleSymbols = ["⠷", "⠯", "⠟", "⠻", "⠽", "⠾"];
  const [brailleSymbolIndex, setBrailleSymbolIndex] = useState<number>(0);

  useEffect(() => {
    const brailleAnimationInterval = setInterval(() => setBrailleSymbolIndex(prev => prev + 1), 100);

    return () => {
      clearInterval(brailleAnimationInterval);
    }
  }, []);

  return (
    <span className={cn("select-none", className)}>
      { brailleSymbols[brailleSymbolIndex % 6] }
    </span>
  );
}

export default BrailleLoader;