import { FC, MouseEventHandler } from 'react';

type WarningControlsProps = {
  cancelCloseModal: MouseEventHandler,
  confirmCloseModal: MouseEventHandler
}

export type WarningControlsComponent = FC<WarningControlsProps>;

const DefaultWarningControls: FC<WarningControlsProps> = (props: WarningControlsProps) => {
  const { cancelCloseModal, confirmCloseModal } = props;
  return (
    <div className="modal__alert-buttons">
      <button type="button" onClick={cancelCloseModal}>Permanecer en esta página</button>
      <button type="button" onClick={confirmCloseModal}>Salir de la página</button>
    </div>
  );
};

export default DefaultWarningControls;
