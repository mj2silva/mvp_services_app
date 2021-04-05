import { FC } from 'react';
import Link from 'next/link';
import InputForm from '../form/InputForm';


const LoginForm : FC = () => (

<form action="" className="accountsForm__form">
    <InputForm typeInput="email" placeHolder="ironman@stark.inc" wrapperClass="accountsForm" label="Tu correo electrónico" name="email" />
    <InputForm typeInput="password" placeHolder="*******" wrapperClass="accountsForm" label="Contraseña" name="pass">
      <Link href="./">
        <a className="accountsForm__passRecovery">
          ¿Olvidaste tu contraseña?
        </a>
      </Link>
    </InputForm>
    <input type="submit" value="Continúa" className="accountsForm__button" />
  </form>
);


export default LoginForm;