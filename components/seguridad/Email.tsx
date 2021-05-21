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

type EmailClosedProps = {
  handleOpen: () => void;
}

const EmailClosed : FC<EmailClosedProps> = (props : EmailClosedProps) => {
  const { handleOpen } = props;
  return (
    <button onClick={handleOpen} type="button" className="config__row-container">
      <span className="config__row-container-head">Correo</span>
      <div className="config__row-container-body">
        <span className="config__row-container-slim">jazavaletac@unitru.edu.pe </span>
      </div>
      <div className="config__row-container-option">
        <FontAwesomeIcon icon={faPencilAlt} className="config__row-container-option-icon" />
        Editar
      </div>
    </button>
  );
};

type EmailOpenProps = {
  handleClose: () => void;
}

const EmailOpen : FC<EmailOpenProps> = (props : EmailOpenProps) => {
  const { handleClose } = props;
  return (
    <div className="config__row-selected">
      <span className="config__row-container-headselected">Correo</span>
      <div className="config__row-container-body">
        <div className="config__row-container-action">
          <div className="email">
            <div className="email__title">
              <span className="config__row-container-slimselect">Correo electrónico actual: jazavaletac@unitru.edu.pe</span>
            </div>
            <hr className="config-line" />
            <div className="email__body">
              <div className="email__body-container">
                <div className="email__body-container-row">
                  <span className="email__body-container-row-primary">Nuevo correo electrónico </span>
                  <input type="text" className="email__body-container-row-input" />
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

const Email : FC<Props> = (props : Props) => {
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
    <EmailOpen
      handleClose={handleChangeOpened}
    />
  ) : <EmailClosed handleOpen={handleChangeOpened} />;
};

Email.defaultProps = defaultProps;

export default Email;
