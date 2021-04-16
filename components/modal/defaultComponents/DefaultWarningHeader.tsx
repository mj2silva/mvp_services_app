import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, MouseEventHandler } from 'react';

type WarningHeaderProps = {
  cancelCloseModal: MouseEventHandler,
  title: string,
}

export type WarningHeaderComponent = FC<WarningHeaderProps>;

const DefaultWarningHeader: FC<WarningHeaderProps> = (props : WarningHeaderProps) => {
  const { cancelCloseModal, title } = props;
  return (
    <div className="modal__header">
      <h2 className="modal__title modal__title--left">{ title }</h2>
      <button className="modal__close-button" type="button" onClick={cancelCloseModal}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default DefaultWarningHeader;
