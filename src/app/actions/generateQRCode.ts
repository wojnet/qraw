"use server"

import QRCode, { QRCodeToBufferOptions } from "qrcode";

const qr = require("qrcode");

export const generateQRCode = async (text: string = "", options?: QRCodeToBufferOptions) => {
  const buffer = await QRCode.toBuffer(text, options);

  console.log(buffer);
  console.log(buffer.toString("base64"));

  return buffer.toString("base64");
}