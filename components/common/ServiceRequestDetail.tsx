import { FC, useState } from 'react';
import Modal from '../../components/modal/Modal';
import {ServiceRequest} from '../../lib/types';
import Accordion from './Accordion';
import {capitalize,shortDate,phoneNumber} from '../../lib/formatter';

type Props = {
  serviceRequest: ServiceRequest,
}

const ServiceRequestDetail:FC<Props> = ({serviceRequest}:Props) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () : void => setIsModalOpen(true);
  const closeModal = () : void => setIsModalOpen(false);

  return (
    <>
      <button type="button" className="table__button" onClick={openModal} >Ver</button>
      <Modal
        title="Información"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
      <div className="accordion">
        <div className="accordion-container">
            <Accordion title="Información del servicio">
                <li className="list"> Código <span className="listConten">{serviceRequest.code}</span> </li>
                <li className="list"> Servicio <span className="listConten">{capitalize(serviceRequest.serviceType||'-')}</span> </li>
                <li className="list"> Modalidad <span className="listConten">{capitalize(serviceRequest.modality||'-')}</span> </li>
                <li className="list"> Contexto <span className="listConten">{capitalize(serviceRequest.context||'-')}</span></li>
                <li className="list"> Lugar <span className="listConten">{capitalize(serviceRequest.place||'-')}</span></li>
                <li className="list"> Fecha <span className="listConten">{shortDate(serviceRequest.serviceDate)}</span></li>
                <li className="list"> Horario <span className="listConten">{serviceRequest.schedule?.start||'-'} - {serviceRequest.schedule?.end||'-'}</span></li>
            </Accordion>  
        </div>
        
        <div className="accordion-container">
            <Accordion title="Informacion de la asesoría">
                <li className="list">Objetivo <span className="listConten">{capitalize(serviceRequest.aditionalInfo.goal||'-')}</span> </li>
                <li className="list">Asignatura <span className="listConten">{capitalize(serviceRequest.aditionalInfo.subject||'-')}</span> </li>
                <li className="list">Tema <span className="listConten">{capitalize(serviceRequest.aditionalInfo.topic||'-')}</span> </li>
                
            </Accordion>   
        </div>
        
        <div className="accordion-container">
            <Accordion title="Información del estudiante">
                <li className="list">DNI <span className="listConten">{serviceRequest.studentInfo?.dni||'-'}</span> </li>
                <li className="list">Nombres <span className="listConten">{capitalize([serviceRequest.studentInfo?.firstName, serviceRequest.studentInfo?.middleNames]||'-')}</span> </li>
                <li className="list">Apellidos <span className="listConten">{capitalize([serviceRequest.studentInfo?.firstLastName, serviceRequest.studentInfo?.secondLastName]||'-')}</span> </li>
                <li className="list">Institución Educativa <span className="listConten">{capitalize(serviceRequest.studentInfo?.school||'-')}</span> </li>
                <li className="list">Grado <span className="listConten">{capitalize(serviceRequest.studentInfo?.grade||'-')}</span> </li>
                <li className="list">Nivel <span className="listConten">{capitalize(serviceRequest.studentInfo?.level||'-')}</span> </li>
            </Accordion>  
        </div>

        <div className="accordion-container">
            <Accordion title="Información del apoderado">
            
                <li className="list">Parentesco <span className="listConten">{capitalize(serviceRequest.parentInfo?.relationship||'-')}</span> </li>
                <li className="list">Nombres <span className="listConten">{capitalize([serviceRequest.parentInfo?.firstName, serviceRequest.parentInfo?.middleNames]||'-')}</span> </li>
                <li className="list">Apellidos <span className="listConten">{capitalize([serviceRequest.parentInfo?.firstLastName, serviceRequest.parentInfo?.secondLastName]||'-')}</span> </li>
                <li className="list">Contacto - email <span className="listConten">{serviceRequest.parentInfo?.contact.email||'-'}</span> </li>
                <li className="list">Contacto - celular <span className="listConten">{phoneNumber(serviceRequest.parentInfo?.contact.phone.number, {country: serviceRequest.parentInfo?.contact.phone.contryCode , region: serviceRequest.parentInfo?.contact.phone.regionCode})||'-'}</span> </li>
            </Accordion>  
        </div>
      </div>  
      </Modal>
    </>
  );
};

export default ServiceRequestDetail;