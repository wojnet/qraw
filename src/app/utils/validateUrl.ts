export enum ValidationMessages {
  isValid = "isValid",
  isEmpty = "isEmpty",
  isNotUrl = "isNotUrl",
  isTooLong = "isTooLong",
}

export interface IValidationResponse {
  isUrlValid: boolean;
  urlValidationMessage: ValidationMessages;
}

export const URL_LENGTH_LIMIT = 256;

const prepareUrlForValidation = (url: string): string => {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `https://${url}`;
};

const isHttpUrl = (value: string): boolean => {
  try {
    const preparedUrl = prepareUrlForValidation(value);
    const url = new URL(preparedUrl);

    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const validateUrl = (url: string): IValidationResponse => {
  const preparedUrl = url.trim();

  if (!preparedUrl) {
    return {
      isUrlValid: false,
      urlValidationMessage: ValidationMessages.isEmpty,
    };
  }

  if (preparedUrl.length > URL_LENGTH_LIMIT) {
    return {
      isUrlValid: false,
      urlValidationMessage: ValidationMessages.isTooLong,
    };
  }

  if (!isHttpUrl(preparedUrl)) {
    return {
      isUrlValid: false,
      urlValidationMessage: ValidationMessages.isNotUrl,
    };
  }

  return {
    isUrlValid: true,
    urlValidationMessage: ValidationMessages.isValid,
  };
};

export default validateUrl;