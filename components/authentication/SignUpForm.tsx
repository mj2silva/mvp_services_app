import { FC, useState } from 'react';

import InputForm from '../form/InputForm';

const SignUpForm : FC = () => {
  const [termsCheck, setTermsCheck] = useState(false);
  const [buttonClass, setButtonClass] = useState('disabled');

  const handleCheckbox = () => {
    if (termsCheck === true) {
      setTermsCheck(false);
      setButtonClass('disabled');
    } else {
      setTermsCheck(true);
      setButtonClass('enabled');
    }
  };

  return (
    <form action="" className="accountsForm__form">
      <InputForm typeInput="text" placeHolder="Anthony Edward Stark" wrapperClass="accountsForm" label="Tu nombre" name="firstname" />
      <InputForm typeInput="email" placeHolder="ironman@stark.inc" wrapperClass="accountsForm" label="Tu correo electrónico" name="email" />
      <InputForm typeInput="password" placeHolder="*******" wrapperClass="accountsForm" label="Contraseña" name="pass" />
      <label htmlFor="terms" className="accountsForm__form-checkbox-container">
        <input type="checkbox" onChange={handleCheckbox} id="checkBoxTerms" name="terms" className="accountsForm__form-checkbox" />
        <span className="accountsForm__form-checkbox-text">Acepto los términos y conficiones</span>
      </label>
      <input type="submit" disabled={!termsCheck} id="submitButton" className={`accountsForm__button-dependent accountsForm__button-dependent--${buttonClass}`} />
    </form>
  );
};

export default SignUpForm;