import { FC, useState } from 'react';
import Password from '../../components/seguridad/Password';
import Email from '../../components/seguridad/Email';

const HomeSeguridad : FC = () => {
  const [openedId, setOpenedId] = useState<number>(null);
  const changeOpened = (id: number = null) : void => {
    setOpenedId(id);
  };
  return (
    <>
      <div className="config-container">
        <div className="config__title-container">
          <h2 className="config__title">Configuración de seguridad de la cuenta</h2>
        </div>
        <div className="config-content">
          <div className="config__row">
            <Password openedId={openedId} id={1} changeOpened={changeOpened} />
          </div>
          <hr className="config-line" />
          <div className="config__row">
            <Email openedId={openedId} id={2} changeOpened={changeOpened} />
          </div>
          
        </div>
      </div>
    </>
  );
};
export default HomeSeguridad;
