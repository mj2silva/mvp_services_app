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
        <div className="accordion-container">

            <a className="accordion-titulo">Información del servicio
              <FontAwesomeIcon className="arrowOpen" icon={faChevronDown} />
              <FontAwesomeIcon className="arrowClose" icon={faChevronUp} />
            </a>
            <ul className="accordion-content">
                {serviceRequest.codigo}<br></br>
                <li className="lyrics"> Servicio:{serviceRequest.serviceType}</li>
                <li className="lyrics"> Modalidad: {serviceRequest.modality} </li>
                <li className="lyrics">Contexto: {serviceRequest.context}</li>
                <li className="lyrics">Lugar: {serviceRequest.place}</li>
                <li className="lyrics">Fecha: {serviceRequest.serviceDate.toLocaleDateString()}</li>
                <li className="lyrics">Horario: {serviceRequest.schedule}</li>
            </ul>  
        </div>
        
        <div>
            <a className="accordion-titulo">Información del ...
              <FontAwesomeIcon className="arrowOpen" icon={faChevronDown} />
              <FontAwesomeIcon className="arrowClose" icon={faChevronUp} />
            </a>
            <ul className="accordion-content">
                <li className="lyrics">Objetivo: {serviceRequest.aditionalInfo.goal}</li>
                <li className="lyrics">Tema: {serviceRequest.aditionalInfo.topic}</li>
                <li className="lyrics">Asignatura: {serviceRequest.aditionalInfo.subject}</li>
            </ul>  
        </div>
        
        <div>
            <a className="accordion-titulo">Información del Estudiante
              <FontAwesomeIcon className="arrowOpen" icon={faChevronDown} />
              <FontAwesomeIcon className="arrowClose" icon={faChevronUp} />
            </a>
            <ul className="accordion-content">
                <li className="lyrics">DNI: {serviceRequest.studentInfo?.dni}</li>
                <li className="lyrics">Nombres: {serviceRequest.studentInfo?.firstName} {serviceRequest.studentInfo?.middleNames}</li>
                <li className="lyrics">Apellidos: {serviceRequest.studentInfo?.firstLastName} {serviceRequest.studentInfo?.secondLastName}</li>
                <li className="lyrics">Institución Educativa: {serviceRequest.studentInfo?.school}</li>
                <li className="lyrics">Grado: {serviceRequest.studentInfo?.grade}</li>
                <li className="lyrics">Nivel: {serviceRequest.studentInfo?.level}</li>
            </ul>  
        </div>

        <div>
            <a className="accordion-titulo">Información del Apoderado
              <FontAwesomeIcon className="arrowOpen" icon={faChevronDown} />
              <FontAwesomeIcon className="arrowClose" icon={faChevronUp} />
            </a>
            <ul className="accordion-content">
                <li className="lyrics">Parentesco: {serviceRequest.parentInfo?.relationship}</li>
                <li className="lyrics">Nombres: {serviceRequest.parentInfo?.firstName} {serviceRequest.parentInfo?.middleNames}</li>
                <li className="lyrics">Apellidos: {serviceRequest.parentInfo?.firstLastName} {serviceRequest.parentInfo?.secondLastName}</li>
                <li className="lyrics">Contacto: {serviceRequest.parentInfo?.contact}</li>
                
            </ul>  
        </div>
        
      </Modal>
    </>
  );
};

export default ServiceRequestDetail;