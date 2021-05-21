import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

type Props = {
  openedId?: number,
  id: number,
  changeOpened: (id?: number) => void;
}

const defaultProps : Partial<Props> = {
  openedId: 0,
};

type PasswordClosedProps = {
  handleOpen: () => void;
}

const PasswordClosed : FC<PasswordClosedProps> = (props : PasswordClosedProps) => {
  const { handleOpen } = props;
  return (
    <button onClick={handleOpen} type="button" className="config__row-container">
      <span className="config__row-container-head">Contraseña</span>
      <div className="config__row-container-body">
        <span className="config__row-container-slim">Se recomienda usar una contraseña segura que no uses en ningún otro sitio. </span>
      </div>
      <div className="config__row-container-option">
        <FontAwesomeIcon icon={faPencilAlt} className="config__row-container-option-icon" />
        Editar
      </div>
    </button>
  );
};

type PasswordOpenProps = {
  handleClose: () => void;
}

const PasswordOpen : FC<PasswordOpenProps> = (props : PasswordOpenProps) => {
  const { handleClose } = props;
  return (
    <div className="config__row-selected">
      <span className="config__row-container-headselected">Contraseña</span>
      <div className="config__row-container-body">
        <div className="config__row-container-action">
          <div className="password">
            <div className="password__title">
              <span className="config__row-container-slimselect">Se recomienda usar una contraseña segura que no uses en ningún otro sitio.</span>
            </div>
            <hr className="config-line" />
            <div className="password__body">
              <div className="password__body-container">
                <div className="password__body-container-row">
                  <span className="password__body-container-row-primary">Actual </span>
                  <input type="password" className="password__body-container-row-input" />
                </div>
                <div className="password__body-container-row">
                  <span className="password__body-container-row-primary">Nueva </span>
                  <input type="password" className="password__body-container-row-input" />
                </div>
                <div className="password__body-container-row">
                  <span className="password__body-container-row-primary">Repetir contraseña nueva </span>
                  <input type="password" className="password__body-container-row-input" />
                </div>
              </div>
            </div>
          </div>
          <div className="config__row-buttons-container">
            <button onClick={handleClose} type="button" className="config__row-buttons-container-btn-close">Cerrar</button>
            <button type="button" className="config__row-buttons-container-btn-save">Guardar</button>
          </div>
        </div>
      </div>
    </div>

  );
};

const Password : FC<Props> = (props : Props) => {
  const { openedId, id, changeOpened } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(openedId === id);
  }, [openedId, id]);

  const handleChangeOpened = () : void => {
    if (isOpen) changeOpened(null);
    else changeOpened(id);
  };
  return isOpen ? (
    <PasswordOpen
      handleClose={handleChangeOpened}
    />
  ) : <PasswordClosed handleOpen={handleChangeOpened} />;
};

Password.defaultProps = defaultProps;

export default Password;
