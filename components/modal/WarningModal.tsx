import { FC, MouseEventHandler, ReactNode } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import DefaultWarningBody from './defaultComponents/DefaultWarningBody';
import DefaultWarningControls, { WarningControlsComponent } from './defaultComponents/DefaultWarningControls';
import DefaultWarningHeader, { WarningHeaderComponent } from './defaultComponents/DefaultWarningHeader';

const defaultWarningTitle = '¿Quieres salir de esta página?';

type Props = ReactModalProps & {
  confirmCloseModal: MouseEventHandler,
  cancelCloseModal: MouseEventHandler,
  WarningHeader?: WarningHeaderComponent,
  WarningBody?: ReactNode,
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
      preventScroll
      overlayClassName="modal__overlay"
      className="modal__content"
    >
      <WarningHeader cancelCloseModal={cancelCloseModal} title={warningTitle} />
      { WarningBody }
      <WarningControls
        cancelCloseModal={cancelCloseModal}
        confirmCloseModal={confirmCloseModal}
      />
    </ReactModal>
  );
};

WarningModal.defaultProps = defaultProps;

export default WarningModal;
