import { FC, useState } from 'react';
import Modal from '../../components/modal/Modal';
import NewRequestForm from '../../components/forms/NewRequestForm';
import RequestsTable from '../../components/tables/RequestsTable';

const Solicitudes:FC = () => {
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
      <RequestsTable />
      <Modal
        title="Solicitar un asesor académico"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        popupWarningOnClose={false}
      >
        <NewRequestForm />
      </Modal>
    </>
  );
};

export default Solicitudes;
