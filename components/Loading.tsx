import { FC } from 'react';

const Loading : FC = () => (
  <main>
    <div className="loading-container" id="container">
      <div className="loading__logo-container" id="logo">
        <img className="loading__logo" src="./assets/img/numeral_logo.svg" alt="" />
      </div>
      <div className="loading__message-container" id="message">
        <p className="loading__message">Estamos configurando una</p>
        <p className="loading__message">experiencia única</p>
        <p className="loading__message">para ti</p>
        <div className="loaging__spinner-container">
          <img className="loading__spinner" src="./assets/img/spinner.svg" alt="" />
        </div>
      </div>
    </div>
  </main>
);

export default Loading;
