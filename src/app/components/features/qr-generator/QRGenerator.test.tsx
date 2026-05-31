import { render, screen } from "@testing-library/react";
import QRGenerator from "./QRGenerator";
import ReduxProvider from "lib/redux/ReduxProvider";

describe("QRGenerator", () => {
  it("renders QR generator heading", () => {
    render(
      <ReduxProvider>
        <QRGenerator />
      </ReduxProvider>
    );

    expect(screen.getByRole("heading", { name: /qr\s?generator/i }))
      .toBeVisible();
  });
});