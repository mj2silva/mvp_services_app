import {
  FC, useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Role from '../../components/configuration/Role';
import DocumentNumber from '../../components/configuration/DocumentNumber';
import Contact from '../../components/configuration/Contact';

const HomeConfiguracion : FC = () => {
  const [openedId, setOpenedId] = useState<number>(null);
  const changeOpened = (id: number = null) : void => {
    setOpenedId(id);
  };
  return (
    <>
      <div className="config-container">
        <div className="config__title-container">
          <h2 className="config__title">Configuración general de la cuenta</h2>
        </div>
        <div className="config-content">
          <div className="config__row">
            <Role openedId={openedId} id={1} changeOpened={changeOpened} />
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
          <Contact openedId={openedId} id={2} changeOpened={changeOpened} />
            
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeConfiguracion;
