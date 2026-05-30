enum ValidationMessages {
  isValid = "isValid",
  isNull = "isNull",
  isNotUrl = "isNotUrl",
  isTooLong = "isTooLong",
}

export interface IValidationResponse {
  isUrlValid: boolean,
  urlValidationMessage: ValidationMessages,
}

export const URL_LENGTH_LIMIT: number = 256;

const validateUrl = (url: string): IValidationResponse => {
  if (!url)
    return {
      isUrlValid: false,
      urlValidationMessage: ValidationMessages.isNull,
    }

  if (url.length > URL_LENGTH_LIMIT) 
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