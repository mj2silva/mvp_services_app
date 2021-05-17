import { FC, useEffect, useState } from 'react';
import { getServiceRequests } from '../../lib/serviceRequestsApi';
import { ServiceRequest } from '../../lib/types';
import Spinner from '../../components/Loading/Spinner';
import Datatable from '../../components/common/Datatable';
import Modal from '../../components/modal/Modal';
import NewRequestForm from '../../components/forms/NewRequestForm';
import ServiceRequestDetail from '../../components/common/ServiceRequestDetail';

import { TableContent } from '../../components/common/Table';

const Solicitudes:FC = () => {
  const [serviceRequests, setServiceRequests] = useState(null);
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

  const tableConstructor = ['Código', 'Hora', 'Fecha', 'Descripción', 'Detalle', 'Estado'];

  const serviceRequestToTable = (requests: ServiceRequest[]):TableContent => ({
    headers: tableConstructor,
    data: {
      row: requests.map((value) => (
        [
          value.codigo,
          value.serviceDate.toLocaleDateString(),
          value.serviceDate.toLocaleTimeString().slice(0, value.serviceDate.toLocaleTimeString().lastIndexOf(':')),
          value.serviceType,
          <ServiceRequestDetail serviceRequest={value} />,
          <div className="badge-container"><span className={`badge badge--${value.status.toLowerCase()}`}>{value.status}</span></div>,
        ]
      )),
    },
  });

  return (
    <>
      <div className="button-container button-container--rigth">
        <button onClick={openModal} type="button" className="button button--primary">
          Crear solicitud
        </button>
      </div>
      {
        serviceRequests
          ? (
            <Datatable tableContent={serviceRequestToTable(serviceRequests)} />
          )
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
        popupWarningOnClose={false}
      >
        <NewRequestForm />
      </Modal>
    </>
  );
};

export default Solicitudes;
