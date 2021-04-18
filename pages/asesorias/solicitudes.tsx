import { FC, useEffect, useState } from 'react';
import { getServiceRequests } from '../../lib/serviceRequestsApi';
import { ServiceRequest } from '../../lib/types';
import Spinner from '../../components/Loading/Spinner';
import Datatable from '../../components/common/Datatable';
import Modal from '../../components/modal/Modal';
import NewRequestForm from '../../components/forms/NewRequestForm';

const Solicitudes:FC = () => {
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () : void => setIsModalOpen(true);
  const closeModal = () : void => setIsModalOpen(false);

  useEffect(() => {
    const getRequests = async ():Promise<void> => {
      const newServiceRequests = await getServiceRequests();
      setServiceRequests(newServiceRequests);
    };
    getRequests();
  }, []);

  return (
    <>
      <div className="button-container button-container--rigth">
        <button onClick={openModal} type="button" className="button button--primary">
          Crear solicitud
        </button>
      </div>
      {
        serviceRequests
          ? <Datatable data={serviceRequests} />
          : (
            <div className="spinner-container">
              <Spinner />
            </div>
          )
      }
      <Modal
        title="Solicitar un asesor académico"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        popupWarningOnClose
      >
        <NewRequestForm />
      </Modal>
    </>
  );
};

export default Solicitudes;
