import validateUrl from "./validateUrl";
import { ValidationMessages } from "./validateUrl";

describe("validateUrl", () => {
  it("returns valid for correct URL", () => {
    const URLs = [
      "https://example.com",
      "http://example.com",
      "example.com",
    ]

    URLs.forEach(url => {
      const result = validateUrl(url);

      expect(result.isUrlValid).toBe(true);
      expect(result.urlValidationMessage).toBe(ValidationMessages.isValid);
    });
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