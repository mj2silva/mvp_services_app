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

type ContactClosedProps = {
  handleOpen: () => void;
}

const ContactClosed : FC<ContactClosedProps> = (props : ContactClosedProps) => {
  const { handleOpen } = props;
  return (
    <button onClick={handleOpen} type="button" className="config__row-container">
      <span className="config__row-container-head">Contacto</span>
      <div className="config__row-container-body">
        <span className="config__row-container-slim">Principal: </span>
        +51933153250
      </div>
      <div className="config__row-container-option">
        <FontAwesomeIcon icon={faPencilAlt} className="config__row-container-option-icon" />
        Editar
      </div>
    </button>
  );
};

type ContactOpenProps = {
  handleClose: () => void;
}

const ContactOpen : FC<ContactOpenProps> = (props : ContactOpenProps) => {
  const { handleClose } = props;
  return (
    <div className="config__row-selected">
      <span className="config__row-container-headselected">Contacto</span>
      <div className="config__row-container-body">
        <div className="config__row-container-action">
          <div className="contact">
            <div className="contact__title">
              <span className="config__row-container-slimselect">Nos contactaremos contigo a través de:</span>
            </div>
            <hr className="config-line" />
            <div className="contact__body">
              <div className="contact__body-container">
                <div className="contact__body-container-row">
                  <span className="contact__body-container-row-primary">WhatsApp: </span>
                  <span className="contact__body-container-row-secondary">+51 933153250</span>
                  <span className="contact__body-container-row-span"> Principal</span>
                </div>
                <div className="contact__body-container-row">
                  <span className="contact__body-container-row-primary">Email: </span>
                  <span className="contact__body-container-row-secondary">axeljenner@hotmail.com</span>
                  <button type="button" className="contact__body-container-row-spanselected">Elegir como principal</button>
                </div>
              </div>
            </div>
          </div>
          <div className="config__row-buttons-container">
            <button onClick={handleClose} type="button" className="config__row-buttons-container-btn-close">Cerrar</button>
            <button type="button" className="config__row-buttons-container-btn-new">Nuevo</button>
          </div>
        </div>
      </div>
    </div>

  );
};

const Contact : FC<Props> = (props : Props) => {
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
    <ContactOpen
      handleClose={handleChangeOpened}
    />
  ) : <ContactClosed handleOpen={handleChangeOpened} />;
};

Contact.defaultProps = defaultProps;

export default Contact;
