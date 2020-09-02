import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationnErrors: Errors = {};

  err.inner.forEach(error => {
    validationnErrors[error.path] = error.message;
  });

  return validationnErrors;
}
