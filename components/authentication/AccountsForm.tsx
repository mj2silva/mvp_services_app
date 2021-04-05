import { FC, ReactNode } from 'react';
import LoginNavBar from './LogInNavBar';
import SignInWithGoogleButton from './SignInWithGoogleButton';

type Props = {
    children: ReactNode,
}

const AccountsForm:FC<Props> = ({ children } : Props) => (
  <div className="accountsForm-container">
    <LoginNavBar />
    <div className="accountsForm__form-container">
      <SignInWithGoogleButton />
      <div className="accountsForm__divisor-container">
        <div className="accountsForm__divisor-line" />
        <div className="accountsForm__divisor-text">o ingresa</div>
        <div className="accountsForm__divisor-line" />
      </div>
      { children }
    </div>
    <div className="accountsForm__copyright-container">
      <span className="accountsForm__copyright-text">
        Copyright © 2020 Grupo Educativo Numeral
      </span>
      <span className="accountsForm__copyright-text">
        All Rights Reserved
      </span>
    </div>
  </div>

);

export default AccountsForm;
