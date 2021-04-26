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
      <button className="modal__alert-button modal__alert-button--no-prefered" type="button" onClick={confirmCloseModal}>Salir de la página</button>
      <button className="modal__alert-button" type="button" onClick={cancelCloseModal}>Permanecer en esta página</button>
    </div>
  );
};

export default DefaultWarningControls;
