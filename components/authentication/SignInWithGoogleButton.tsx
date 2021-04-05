import { FC } from 'react';

const SignInWithGoogleButton : FC = () => (
  <a href="./" className="accountsForm__button accountsForm__button--google">
    <img src="/img/google.svg" alt="Google" className="accountsForm__button-ico accountsForm__button-ico--active" />
    <img src="/img/google-inactive.svg" alt="Google" className="accountsForm__button-ico accountsForm__button-ico--inactive" />
    Continúa con Google
  </a>
);

export default SignInWithGoogleButton;
