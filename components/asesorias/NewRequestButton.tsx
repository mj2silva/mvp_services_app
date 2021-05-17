import { FC, useState } from "react";
import NewRequestForm from "../forms/NewRequestForm";
import Modal from "../modal/Modal";


const NewRequestButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () : void => setIsModalOpen(true);
  const closeModal = () : void => setIsModalOpen(false);
  return (
    <>
      <div className="button-container button-container--rigth">
        <button onClick={openModal} type="button" className="button button--primary">
          Crear solicitud
        </button>
      </div>

      <Modal
        title="Solicitudes de Solicitud"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        popupWarningOnClose={false}
      >
        <NewRequestForm />
      </Modal>
    </>
  );
}

export default NewRequestButton;