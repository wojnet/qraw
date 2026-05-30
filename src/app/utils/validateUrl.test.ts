import validateUrl from "./validateUrl";
import { ValidationMessages } from "./validateUrl";

describe("validateUrl", () => {
  it("returns valid for correct URL", () => {
    const resultHttps = validateUrl("https://example.com");
    const resultHttp = validateUrl("http://example.com");

    expect(resultHttps.isUrlValid).toBe(true);
    expect(resultHttp.isUrlValid).toBe(true);
    expect(resultHttps.urlValidationMessage).toBe(ValidationMessages.isValid);
    expect(resultHttp.urlValidationMessage).toBe(ValidationMessages.isValid);
  });

  it("returns invalid for incorrect URLs", () => {
    const result = validateUrl("https://example.com");
    expect(result.isUrlValid).toBe(true);
    expect(result.urlValidationMessage).toBe(ValidationMessages.isValid);
  });

  it("returns invalid for empty string", () => {
    const result = validateUrl("");
    expect(result.isUrlValid).toBe(false);
    expect(result.urlValidationMessage).toBe(ValidationMessages.isEmpty);
  });

  it("returns invalid for spaces only", () => {
    const result = validateUrl("   ");
    expect(result.isUrlValid).toBe(false);
    expect(result.urlValidationMessage).toBe(ValidationMessages.isEmpty);
  });
});