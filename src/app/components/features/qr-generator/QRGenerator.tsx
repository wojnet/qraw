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
    }, 2000 + URL.length * interval + 10);
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
    <div className="w-96 h-auto flex flex-col items-center gap-10 mt-14">
      <div className="w-full flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold text-[#222]">
          <span className="text-blue-600">Q</span>
          RGenerator
        </h1>
        <p className="text-neutral-500 mb-14 italic">
          The best free QR code generation tool
        </p>
      </div>

      <div className="w-full flex gap-2">
        <div className="h-9 flex items-center justify-between grow shrink-0 border border-neutral-300 rounded-lg shadow-sm px-[6px] focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all duration-200 bg-white">
          { devtoolsEnabled &&
            <button
              className="h-full flex flex-col justify-center items-center cursor-pointer hover:opacity-70 mr-2"
              onClick={() => setURLString("https://github.com/wojnet/qraw")}
            >
              <FileText className="mt-1" />
              <p className="text-xs">fill</p>
            </button>
          }
          <input
            data-testid="qr-url-input"
            type="text"
            value={URLString}
            onChange={onInputChange}
            onKeyDown={onInputKeyDown}
            ref={URLInputRef}
            placeholder={isURLInputFocused ? "" : "https://example.com"}
            disabled={isURLInputDisabled}
            className="h-full grow outline-none text-sm bg-transparent text-gray-800 placeholder:text-neutral-400"
          />
          { isURLInputFocused &&
            <code
              onClick={processURLAndGenerateQR}
              className="w-6 h-6 bg-neutral-100 flex justify-center border border-neutral-300 cursor-pointer px-1 rounded text-neutral-500 hover:bg-neutral-200 transition-colors"
            >
              &crarr;
            </code>
          }
          { isURLInputDisabled &&
            <code className="w-6 h-6 flex justify-center px-1 text-neutral-400">
              <BrailleLoader className="text-lg" />
            </code>
          }
        </div>
        <button
          className="h-9 bg-blue-600 text-white border border-blue-700 rounded-lg shadow-[1px_1px_0_#1e40af,_1px_1px_1px_rgba(255,255,255,0.15)_inset] px-4 cursor-pointer hover:translate-[1px] hover:shadow-[1px_1px_1px_rgba(255,255,255,0.15)_inset] disabled:opacity-50 disabled:translate-[1px] disabled:cursor-not-allowed font-bold text-sm tracking-wide transition-transform"
          onClick={processURLAndGenerateQR}
          disabled={isURLInputDisabled}
        >
          GET
        </button>
      </div>

      { QRImageURL &&
        <div className="w-full flex flex-col items-center gap-5 rounded-xl border border-neutral-200 bg-white shadow-sm p-6">
          <div className="text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">QR Code for</p>
            <a
              className="text-blue-600 text-sm break-all hover:underline"
              href={lastURLString}
              target="_blank"
            >
              {lastURLString}
            </a>
          </div>
          <div className="p-3 border border-neutral-100 rounded-lg bg-neutral-50">
            <img
              className="w-52 h-52 aspect-square image-rendering-crisp"
              src={QRImageURL}
              alt="QR code"
            />
          </div>
          <button
            className="h-9 bg-neutral-100 border border-[#444] rounded-lg shadow-[1px_1px_0_#444,_1px_1px_1px_white_inset] px-4 cursor-pointer hover:translate-[1px] hover:shadow-[1px_1px_1px_white_inset] font-bold text-sm tracking-wide transition-transform"
            onClick={() => downloadImageFromURL(QRImageURL, "qrcode.png")}
          >
            DOWNLOAD
          </button>
        </div>
      }
    </div>
  )
}

export default QRGenerator;