"use client"
import { ChangeEventHandler, JSX, KeyboardEventHandler, useEffect, useRef, useState } from "react";
import BrailleLoader from "../../ui/loaders/BrailleLoader";

const QRGenerator = (): JSX.Element => {
  const URLInputRef = useRef<HTMLInputElement>(null);
  const [URLString, setURLString] = useState<string>("");
  const [isURLInputDisabled, setIsURLInputDisabled] = useState<boolean>(false);
  const [isURLInputFocused, setIsURLInputFocused] = useState<boolean>(false);

  const generateQRCode = (URL: string) => {
    setIsURLInputDisabled(true);
    setURLString(URL);

    const interval = 1000 / URL.length;

    setTimeout(() => {
      for (let i = 0; i < URL.length; i++) {
        setTimeout(() => {
          setURLString(prev => prev.slice(0, -2) + "|");
        }, i * interval);
      }
    }, 2000);

    setTimeout(() => {
      setURLString("");
      setIsURLInputDisabled(false);
    }, 2000 + URL.length * interval);
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setURLString(event.target.value);
  }

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      generateQRCode(URLString);
    }

    if (event.key === "Escape") {
      URLInputRef.current?.blur();
    }
  }

  useEffect(() => {
    const onInputFocusIn = (event: FocusEvent) => {
      setIsURLInputFocused(true);
    }

    const onInputFocusOut = (event: FocusEvent) => {
      setIsURLInputFocused(false);
    }

    URLInputRef.current?.addEventListener("focusin", onInputFocusIn);
    URLInputRef.current?.addEventListener("focusout", onInputFocusOut);

    return () => {
      removeEventListener("focusin", onInputFocusIn);
      removeEventListener("focusout", onInputFocusOut);
    }
  }, []);

  return (
    <div className="w-96 h-auto flex flex-col items-center gap-10 my-10">
      <div className="w-full flex flex-col items-center gap-5">
        <h1 className="text-3xl font-bold text-[#222]">QRGenerator</h1>
        <div className="w-full h-9 flex gap-3">
          <div className="w-56 h-9 flex items-center justify-between grow shrink-0 border border-[#444] rounded-lg shadow-[1px_1px_0_#444] px-[6px]">
            <input
              type="text"
              value={URLString}
              onChange={onInputChange}
              onKeyDown={onInputKeyDown}
              ref={URLInputRef}
              placeholder={isURLInputFocused ? "" : "https://example.com"}
              disabled={isURLInputDisabled}
              className="h-full grow outline-none"
            />
            { isURLInputFocused &&
              <code
                onClick={() => generateQRCode(URLString)}
                className="w-6 h-6 bg-gray-200 flex justify-center border border-gray-400 cursor-pointer px-1 rounded"
              >
                &crarr;
              </code>
            }
            { isURLInputDisabled &&
              <code
                className="w-6 h-6 flex justify-center px-1"
              >
                <BrailleLoader className="text-lg" />
              </code>
            }
          </div>
          <button
            className="w-12 h-full bg-neutral-200 border border-[#444] rounded-lg shadow-[1px_1px_0_#444,_1px_1px_1px_white_inset] px-[6px] cursor-pointer hover:translate-[1px] hover:shadow-[1px_1px_1px_white_inset] font-bold"
            onClick={() => generateQRCode(URLString)}
            disabled={isURLInputDisabled}
          >
            { !isURLInputDisabled && "GET" }
            { isURLInputDisabled && <BrailleLoader className="text-lg" /> }
          </button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full aspect-square border border-[#444] rounded-xl shadow-[1px_1px_0_#444]"></div>
      </div>
    </div>
  )
}

export default QRGenerator;