import { FC, useEffect, useState } from 'react';
import { getServiceRequests, readTopics } from '../../lib/serviceRequestsApi';
import { ServiceRequest } from '../../lib/types';
import { getCollection } from '../../lib/collectionsApi';
import Spinner from '../../components/Loading/Spinner';
import Datatable from '../../components/common/Datatable';
import Modal from '../../components/modal/Modal';
import NewRequestForm from '../../components/forms/NewRequestForm';
import { TableContent } from '../../components/common/Table';
//import { readTopics } from 'firebase/firebase';


const Solicitudes:FC = () => {
  const [serviceRequests, setServiceRequests] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () : void => setIsModalOpen(true);
  const closeModal = () : void => setIsModalOpen(false);
  const getFBServiceRequests = async () => {
    const sr = await getCollection('serviceRequests');
    setServiceRequests(sr);
    console.log(sr);
  };
  useEffect(() => {
    getFBServiceRequests();
    // const getRequests = async ():Promise<void> => {
    //   const newServiceRequests = await getServiceRequests();
    //   setServiceRequests(newServiceRequests);
    // };
    // getRequests();
  }, []);

  const tableConstructor = ['Código', 'Fecha', 'Hora', 'Descripción', 'Detalle', 'Estado'];

  const serviceRequestToTable = (request):TableContent => ({
    headers: tableConstructor,
    data: {
      row: request.map((value) => (
        [
          value.codigo,
          value.service_date.toDate().toISOString().slice(0, value.service_date.toDate().toISOString().lastIndexOf('T')),
          value.service_date.toDate().toLocaleTimeString().slice(0, value.service_date.toDate().toLocaleTimeString().lastIndexOf(':')),
          value.serviceType,
          <button type="button" className="table__button" onClick={openModal}>Ver</button>,
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
