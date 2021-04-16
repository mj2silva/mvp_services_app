import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FC, MouseEventHandler, ReactNode, useState,
} from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { WarningControlsComponent } from './defaultComponents/DefaultWarningControls';
import WarningModal from './WarningModal';

type ModalHeaderProps = {
  onCloseModal: MouseEventHandler,
  title: string,
}

const DefaultHeaderComponent: FC<ModalHeaderProps> = (props: ModalHeaderProps) => {
  const { onCloseModal, title } = props;
  return (
    <div className="modal__header">
      <h2 className="modal__title">{ title }</h2>
      <button className="modal__close-button" type="button" onClick={onCloseModal}><FontAwesomeIcon icon={faTimes} /></button>
    </div>
  );
};

type Props = ReactModalProps & {
  WarningBodyElement?: ReactNode,
  WarningControlsElement?: WarningControlsComponent,
  HeaderComponent?: FC<ModalHeaderProps>,
  warningTitle?: string,
  children?: ReactNode,
  popupWarningOnClose?: boolean,
  title?: string,
}

const defaultProps: Partial<Props> = {
  HeaderComponent: DefaultHeaderComponent,
  WarningBodyElement: undefined,
  warningTitle: undefined,
  WarningControlsElement: undefined,
  popupWarningOnClose: false,
  children: null,
  title: '',
};

const Modal: FC<Props> = (props: Props) => {
  ReactModal.setAppElement('#__next');
  const {
    isOpen,
    children,
    popupWarningOnClose,
    onRequestClose,
    HeaderComponent,
    WarningBodyElement,
    WarningControlsElement,
    warningTitle,
    title,
  } = props;
  const [isWarningOpen, setIsWarningOpen] = useState<boolean>(false);
  const handleClose: MouseEventHandler = (event) : void => {
    if (popupWarningOnClose) setIsWarningOpen(true);
    else onRequestClose(event);
  };
  const cancelCloseModal = () : void => {
    setIsWarningOpen(false);
  };
  const confirmCloseModal: MouseEventHandler = (event) : void => {
    setIsWarningOpen(false);
    onRequestClose(event);
  };
  return (
    <>
      <ReactModal
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        isOpen={isOpen}
        onRequestClose={handleClose}
        preventScroll
        overlayClassName="modal__overlay"
        className="modal__content"
      >
        <HeaderComponent title={title} onCloseModal={handleClose} />
        { children }
      </ReactModal>
      { (popupWarningOnClose)
      && (
      <WarningModal
        isOpen={isWarningOpen}
        onRequestClose={cancelCloseModal}
        confirmCloseModal={confirmCloseModal}
        cancelCloseModal={cancelCloseModal}
        WarningBody={WarningBodyElement}
        WarningControls={WarningControlsElement}
        warningTitle={warningTitle}
      />
      ) }
    </>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
