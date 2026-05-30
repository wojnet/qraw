import { render, screen } from "@testing-library/react";
import ReduxProvider from "@/lib/redux/ReduxProvider";
import QRGenerator from "./QRGenerator";

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