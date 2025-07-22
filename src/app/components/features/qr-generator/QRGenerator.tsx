"use client"
import { ChangeEventHandler, JSX, KeyboardEventHandler, useEffect, useRef, useState } from "react";
import BrailleLoader from "@components/ui/loaders/BrailleLoader";
import { generateQRCode } from "@actions/generateQRCode";
import { downloadImageFromURL } from "@utils/downloadImage";

const QRGenerator = (): JSX.Element => {
  const URLInputRef = useRef<HTMLInputElement>(null);
  const [URLString, setURLString] = useState<string>("");
  const [lastURLString, setLastURLString] = useState<string>("");
  const [isURLInputDisabled, setIsURLInputDisabled] = useState<boolean>(false);
  const [isURLInputFocused, setIsURLInputFocused] = useState<boolean>(false);
  const [QRImageURL, setQRImageURL] = useState<string | null>(null);

  const processURLAndGenerateQR = async () => {
    setIsURLInputDisabled(true);
    setLastURLString(URLString);

    const QRData: string = await generateQRCode(
      URLString,
      {
        margin: 0,
        errorCorrectionLevel: "H",
      }
    );
    setQRImageURL(`data:image/png;base64,${QRData}`);
    
    setURLString("");
    setIsURLInputDisabled(false);
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setURLString(event.target.value);
  }

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      processURLAndGenerateQR();
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
        <div className="w-full h-9 flex gap-3 mb-5">
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
                onClick={processURLAndGenerateQR}
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
            className="h-full bg-neutral-100 border border-[#444] rounded-lg shadow-[1px_1px_0_#444,_1px_1px_1px_white_inset] px-3 cursor-pointer hover:translate-[1px] hover:shadow-[1px_1px_1px_white_inset] disabled:translate-[1px] disabled:shadow-[1px_1px_1px_white_inset] font-bold"
            onClick={processURLAndGenerateQR}
            disabled={isURLInputDisabled}
          >
            GET
          </button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        { QRImageURL && 
          <div className="w-full aspect-square flex flex-col justify-start items-center gap-5">
            <section className="text-center">
              <p>QR Code for</p>
              <a
                className="text-neutral-500 mb-14 italic"
                href={lastURLString}
                target="_blank"
              >
                {lastURLString}
              </a>
            </section>
            <img
              className="max-w-64 max-h-64 aspect-square w-full h-full image-rendering-crisp"
              src={QRImageURL}
              alt="QR code"
            />
            <button
              className="h-9 bg-neutral-100 border border-[#444] rounded-lg shadow-[1px_1px_0_#444,_1px_1px_1px_white_inset] px-3 cursor-pointer hover:translate-[1px] hover:shadow-[1px_1px_1px_white_inset] disabled:translate-[1px] disabled:shadow-[1px_1px_1px_white_inset] font-bold"
              onClick={() => downloadImageFromURL(QRImageURL, "qrcode.png")}
            >
              DOWNLOAD
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default QRGenerator;