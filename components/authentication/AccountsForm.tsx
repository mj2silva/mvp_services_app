import { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
    children: ReactNode,
    signx:string
}

const AccountsForm:FC<Props>=({ children, signx }:Props) => (
    
    <div className="accountsForm-container">
      <div className="accountsForm__navBar-container">
        <Link href="./sign-up">
          <a className={`accountsForm__navBar-link ${(signx === 'sign-up') ? 'accountsForm__navBar-link--active' : ('')}`}>
            Registrate
          </a>
        </Link>
        <Link href="./log-in">
          <a className={`accountsForm__navBar-link ${(signx === 'log-in') ? 'accountsForm__navBar-link--active' : ('')}`}>
            Inicia Sesión
          </a>
        </Link>
      </div>
      <div className="accountsForm__form-container">
        <a href="./" className="accountsForm__button accountsForm__button--google">
          <img src="/img/google.svg" alt="Google" className="accountsForm__button-ico accountsForm__button-ico--active" />
          <img src="/img/google-inactive.svg" alt="Google" className="accountsForm__button-ico accountsForm__button-ico--inactive" />
          Continúa con Google
        </a>
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
