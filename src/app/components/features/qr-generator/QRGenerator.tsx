"use client"
import { ChangeEventHandler, JSX, KeyboardEventHandler, useEffect, useRef, useState } from "react";

const QRGenerator = (): JSX.Element => {
  const URLInputRef = useRef<HTMLInputElement>(null);
  const [URLString, setURLString] = useState<string>("");
  const [isURLInputDisabled, setIsURLInputDisabled] = useState<boolean>(false);
  const [isEnterIconShown, setIsEnterIconShown] = useState<boolean>(false);

  const generateQRCode = () => {
    setIsURLInputDisabled(true);
    
    setTimeout(() => {
      setIsURLInputDisabled(false);
      setURLString("");
    }, 2000);
  }

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setURLString(event.target.value);
  }

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      generateQRCode();
    }
  }

  useEffect(() => {
    const onInputFocusIn = (event: FocusEvent) => { setIsEnterIconShown(true) }
    const onInputFocusOut = (event: FocusEvent) => { setIsEnterIconShown(false) }

    URLInputRef.current?.addEventListener("focusin", onInputFocusIn);
    URLInputRef.current?.addEventListener("focusout", onInputFocusOut);

    return () => {
      removeEventListener("focusin", onInputFocusIn);
      removeEventListener("focusout", onInputFocusOut);
    }
  }, []);

  return (
    <div className="w-full flex gap-5 my-10">
      <div className="w-1/2 flex flex-col items-start gap-5">
        <h1 className="text-xl">Insert URL</h1>
        <div className="w-56 h-9 flex items-center justify-between border rounded-lg shadow-[1px_1px_0_black] px-[5px]">
          <input
            type="text"
            value={URLString}
            onChange={onInputChange}
            onKeyDown={onInputKeyDown}
            ref={URLInputRef}
            disabled={isURLInputDisabled}
            className="grow outline-none disabled:animate-pulse disabled:opacity-80"
          />
          { isEnterIconShown &&
            <code
              onClick={generateQRCode}
              className="w-6 h-6 bg-gray-200 flex justify-center border border-gray-400 cursor-pointer px-1 rounded"
            >
              &crarr;
            </code>
          }
          { isURLInputDisabled &&
            <code
              className="w-6 h-6 flex justify-center px-1"
            >
              &hellip;
            </code>
          }
        </div>
      </div>
      <div className="w-1/2">

      </div>
    </div>
  )
}

export default QRGenerator;