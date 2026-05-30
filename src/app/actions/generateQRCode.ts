"use server"

import QRCode, { QRCodeToBufferOptions } from "qrcode";

export const generateQRCode = async (text: string = "", options?: QRCodeToBufferOptions) => {
  const buffer = await QRCode.toBuffer(text, options);
  return buffer.toString("base64");
}