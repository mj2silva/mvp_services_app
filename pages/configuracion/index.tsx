import {
  FC, useEffect, useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Role from '../../components/configuration/Role';
import DocumentNumber from '../../components/configuration/DocumentNumber';

type Props = {
    openedId: number,
    id: number,
}

const HomeConfiguracion : FC<Props> = (props : Props) => {
  const {
    openedId, id,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(openedId === id);
  }, [openedId, id]);
  return (
    <>
      <div className="config-container">
        <div className="config__title-container">
          <h2 className="config__title">Configuración general de la cuenta</h2>
        </div>
        <div className="config-content">
          <div className="config__row">
            <Role isOpen />
          </div>
          <hr className="config-line" />
          <div className="config__row">
            <DocumentNumber />
          </div>
          <hr className="config-line" />
          <div className="config__row">
            <button type="button" className="config__row-container">
              <span className="config__row-container-head">Nombres</span>
              <span className="config__row-container-body">Axel Jenner</span>
            </button>
          </div>
          <hr className="config-line" />
          <div className="config__row">
            <button type="button" className="config__row-container">
              <span className="config__row-container-head">Apellidos</span>
              <span className="config__row-container-body">Juárez Ávila</span>
            </button>
          </div>
          <hr className="config-line" />

          <div className="config__row">
            <button type="button" className="config__row-container">
              <span className="config__row-container-head">Contacto</span>
              <div className="config__row-container-body">
                <span className="config__row-container-slim">Principal: </span>
                +51933153250
                <div className={`config__row-container-action--${(isOpen) ? 'visible' : 'hidden'}`}>
                  <div className="contact">
                    <div className="contact__title">
                      <span className="">Nos contactaremos contigo a través de:</span>
                    </div>
                    <div className="contact__body">
                      <div className="contact__body-container">
                        <div className="contact__body-container-row">
                          <span className="">WhatsApp: </span>
                          <span className="">+51 933153250</span>
                          <span className=""> Principal</span>
                        </div>
                        <div className="contact__body-container-row">
                          <span className="">Email: </span>
                          <span className="">axeljenner@hotmail.com</span>
                          <span className=""> Elegir como principal</span>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="config__row-buttons-container">
                    <button type="button" className="">Cerrar</button>
                    <button type="button" className="">Aceptar</button>
                  </div>
                </div>
              </div>
              <div className="config__row-container-option">
                <FontAwesomeIcon icon={faPencilAlt} className="config__row-container-option-icon" />
                Editar
              </div>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeConfiguracion;
