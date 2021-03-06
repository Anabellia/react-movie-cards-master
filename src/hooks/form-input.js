import React, { useState } from 'react';

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = enteredValue.trim() !== '';

  const valueIsInvalid = !valueIsValid && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    invalidValue: valueIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
