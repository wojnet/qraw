export enum ValidationMessages {
  isValid = "isValid",
  isEmpty = "isEmpty",
  isNotUrl = "isNotUrl",
  isTooLong = "isTooLong",
}

export interface IValidationResponse {
  isUrlValid: boolean,
  urlValidationMessage: ValidationMessages,
}

export const URL_LENGTH_LIMIT: number = 256;

const validateUrl = (url: string): IValidationResponse => {
  const preparedUrl = url.trim();

  if (!preparedUrl)
    return {
      isUrlValid: false,
      urlValidationMessage: ValidationMessages.isEmpty,
    }

  if (preparedUrl.length > URL_LENGTH_LIMIT) 
    return {
      isUrlValid: false,
      urlValidationMessage: ValidationMessages.isTooLong,
    }

  return {
      isUrlValid: true,
      urlValidationMessage: ValidationMessages.isValid,
    };
}

export default validateUrl;