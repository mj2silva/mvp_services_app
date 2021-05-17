import { FC, useEffect, useState } from 'react';
import { getServiceRequests} from '../../lib/serviceRequestsRepository';
import { ServiceRequest } from '../../lib/types';
import Spinner from '../../components/Loading/Spinner';
import Datatable from '../../components/common/Datatable';
import Modal from '../../components/modal/Modal';
import { TableContent } from '../../components/common/Table';
import NewRequestButton from '../../components/asesorias/NewRequestButton';
import InputForm from '../../components/form/InputForm';

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

  const tableConstructor = ['Código', 'Fecha', 'Hora', 'Descripción', 'Detalle', 'Estado'];

  const serviceRequestToTable = (requests: ServiceRequest[]):TableContent => ({
    headers: tableConstructor,
    data: {
      row: requests.map((value) => (
        [
          value.code,
          value.serviceDate.toLocaleDateString(),
          value.serviceDate.toLocaleTimeString().slice(0, value.serviceDate.toLocaleTimeString().lastIndexOf(':')),
          value.serviceType,
          <button type="button" className="table__button" onClick={openModal}>Ver</button>,
          <div className="badge-container"><span className={`badge badge--${value.status.toLowerCase()}`}>{value.status}</span></div>,
          <Modal
            title="Detalle de Solicitud"
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            popupWarningOnClose={false}
          >
            <div className="row">
                <label htmlFor="code">Código: </label>
            </div>
            <div className="row">
              <input type="text" id="code" name="code" value={value.code} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="serviceType">Tipo de Servicio: </label>
            </div>
            <div className="row">
              <input type="text" id="serviceType" name="serviceType" value={value.serviceType} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="serviceDate">Fecha de servicio: </label>
            </div>
            <div className="row">
              <input type="text" id="serviceDate" name="serviceDate" value={value.serviceDate.toLocaleDateString()} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="serviceTime">Hora: </label>
            </div>
            <div className="row">
              <input type="text" id="serviceTime" name="serviceTime" value={value.serviceDate.toLocaleTimeString().slice(0, value.serviceDate.toLocaleTimeString().lastIndexOf(':'))} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="subject">Asignatura: </label>
            </div>
            <div className="row">
              <input type="text" id="subject" name="subject" value={value.aditionalInfo.subject} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="topic">Tema: </label>
            </div>
            <div className="row">
              <input type="text" id="topic" name="topic" value={value.aditionalInfo.topic} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="name">Nombre: </label>
            </div>
            <div className="row">
              <input type="text" id="name" name="name" value={value.metadata.createdBy.firstName} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="firstLastName">Apellido Paterno: </label>
            </div>
            <div className="row">
              <input type="text" id="firstLastName" name="firstLastName" value={value.metadata.createdBy.firstLastName} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="secondLastName">Apellido Materno: </label>
            </div>
            <div className="row">
              <input type="text" id="secondLastName" name="secondLastName" value={value.metadata.createdBy.secondLastName} disabled/>              
            </div>
            <div className="row">
                <label htmlFor="relationship">Tipo de Apoderado: </label>
            </div>
            <div className="row">
              <input type="text" id="relationship" name="relationship" value={value.metadata.createdBy.relationship} disabled/>              
            </div>
            
          </Modal>
        ]
      )),
    },
  });

  return (
    <>
      
      <NewRequestButton />
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
      
    </>
  );
};

export default Solicitudes;
