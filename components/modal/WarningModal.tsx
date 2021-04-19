import { FC, MouseEventHandler } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import DefaultWarningBody from './defaultComponents/DefaultWarningBody';
import DefaultWarningControls, { WarningControlsComponent } from './defaultComponents/DefaultWarningControls';
import DefaultWarningHeader, { WarningHeaderComponent } from './defaultComponents/DefaultWarningHeader';

const defaultWarningTitle = '¿Quieres salir de esta página?';

type Props = ReactModalProps & {
  confirmCloseModal: MouseEventHandler,
  cancelCloseModal: MouseEventHandler,
  WarningHeader?: WarningHeaderComponent,
  WarningBody?: FC | string,
  WarningControls?: WarningControlsComponent,
  warningTitle?: string,
}

const defaultProps: Partial<Props> = {
  WarningHeader: DefaultWarningHeader,
  WarningBody: DefaultWarningBody,
  WarningControls: DefaultWarningControls,
  warningTitle: defaultWarningTitle,
};

const WarningModal: FC<Props> = (props: Props) => {
  const {
    isOpen,
    confirmCloseModal,
    cancelCloseModal,
    WarningHeader,
    WarningBody,
    WarningControls,
    warningTitle,
  } = props;
  return (
    <ReactModal
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      isOpen={isOpen}
      overlayClassName="modal__overlay"
      className="modal__content modal__content--alert"
    >
      <WarningHeader cancelCloseModal={cancelCloseModal} title={warningTitle} />
      <div className="modal__body modal__body--alert">
        { (typeof WarningBody === 'string' ? WarningBody : <WarningBody />)}
        <WarningControls
          cancelCloseModal={cancelCloseModal}
          confirmCloseModal={confirmCloseModal}
        />
      </div>
    </ReactModal>
  );
};

WarningModal.defaultProps = defaultProps;

export default WarningModal;
