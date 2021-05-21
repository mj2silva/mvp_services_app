import { FC, useState } from 'react';
import Role from '../../components/configuration/Role';
import DocumentNumber from '../../components/configuration/DocumentNumber';
import Contact from '../../components/configuration/Contact';
import Name from '../../components/configuration/Name';
import LastName from '../../components/configuration/LastName';

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
            <Name />
          </div>
          <hr className="config-line" />
          <div className="config__row">
            <LastName />
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
