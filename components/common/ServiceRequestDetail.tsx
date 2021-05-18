import { FC, useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import { ServiceRequest} from '../../lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown,faChevronUp} from '@fortawesome/free-solid-svg-icons';


type Props = {
  serviceRequest: ServiceRequest
}

const ServiceRequestDetail:FC<Props> = ({ serviceRequest}:Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () : void => setIsModalOpen(true);
  const closeModal = () : void => setIsModalOpen(false);

  return (
    <>
      <button type="button" className="table__button" onClick={openModal}>Ver</button>
      <Modal
        title="Información"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
      <div className="accordion">
        <div className="accordion-container">

            <a className="accordion-title">Información del servicio
              <FontAwesomeIcon className="arrowOpen" icon={faChevronDown} />
              <FontAwesomeIcon className="arrowClose" icon={faChevronUp} />
            </a>
            <ul className="accordion-content">
                <li className="list"> Código: <span className="listConten">{serviceRequest.codigo}</span> </li>
                <li className="list"> Servicio: <span className="listConten">{serviceRequest.serviceType}</span> </li>
                <li className="list"> Modalidad: <span className="listConten">{serviceRequest.modality}</span> </li>
                <li className="list"> Contexto: <span className="listConten">{serviceRequest.context}</span></li>
                <li className="list"> Lugar: <span className="listConten">{serviceRequest.place}</span></li>
                <li className="list"> Fecha: <span className="listConten">{serviceRequest.serviceDate.toLocaleDateString()}</span></li>
                <li className="list"> Horario: <span className="listConten">{serviceRequest.schedule}</span></li>
            </ul>  
        </div>
        
        <div className="accordion-container">
            <a className="accordion-title">Información de la Asesoría
              <FontAwesomeIcon className="arrowOpen" icon={faChevronDown} />
              <FontAwesomeIcon className="arrowClose" icon={faChevronUp} />
            </a>
            <ul className="accordion-content">
                <li className="list">Objetivo: <span className="listConten">{serviceRequest.aditionalInfo.goal}</span> </li>
                <li className="list">Tema: <span className="listConten">{serviceRequest.aditionalInfo.topic}</span> </li>
                <li className="list">Asignatura: <span className="listConten">{serviceRequest.aditionalInfo.subject}</span> </li>
            </ul>  
        </div>
        
        <div className="accordion-container">
            <a className="accordion-title">Información del Estudiante
              <FontAwesomeIcon className="arrowOpen" icon={faChevronDown} />
              <FontAwesomeIcon className="arrowClose" icon={faChevronUp} />
            </a>
            <ul className="accordion-content">
                <li className="list">DNI: <span className="listConten">{serviceRequest.studentInfo?.dni}</span> </li>
                <li className="list">Nombres: <span className="listConten">{serviceRequest.studentInfo?.firstName} {serviceRequest.studentInfo?.middleNames}</span> </li>
                <li className="list">Apellidos: <span className="listConten">{serviceRequest.studentInfo?.firstLastName} {serviceRequest.studentInfo?.secondLastName}</span> </li>
                <li className="list">Institución Educativa: <span className="listConten">{serviceRequest.studentInfo?.school}</span> </li>
                <li className="list">Grado: <span className="listConten">{serviceRequest.studentInfo?.grade}</span> </li>
                <li className="list">Nivel: <span className="listConten">{serviceRequest.studentInfo?.level}</span> </li>
            </ul>  
        </div>

        <div className="accordion-container">
            <a className="accordion-title">Información del Apoderado
              <FontAwesomeIcon className="arrowOpen" icon={faChevronDown} />
              <FontAwesomeIcon className="arrowClose" icon={faChevronUp} />
            </a>
            <ul className="accordion-content">
                <li className="list">Parentesco: <span className="listConten">{serviceRequest.parentInfo?.relationship}</span> </li>
                <li className="list">Nombres: <span className="listConten">{serviceRequest.parentInfo?.firstName} {serviceRequest.parentInfo?.middleNames}</span> </li>
                <li className="list">Apellidos: <span className="listConten">{serviceRequest.parentInfo?.firstLastName} {serviceRequest.parentInfo?.secondLastName}</span> </li>
                <li className="list">Contacto: <span className="listConten">{serviceRequest.parentInfo?.contact}</span> </li>
                
            </ul>  
        </div>
      </div>  
      </Modal>
    </>
  );
};

export default ServiceRequestDetail;