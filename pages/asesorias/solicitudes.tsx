import { FC, useEffect, useState } from 'react';
import { getServiceRequests } from '../../lib/serviceRequestsApi';
import { ServiceRequest } from '../../lib/types';

import Spinner from '../../components/Loading/Spinner';
import Datatable from '../../components/common/Datatable';
import { TableContent } from '../../components/common/Table';

const Solicitudes:FC = () => {
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>(null);

  useEffect(() => {
    const getRequests = async ():Promise<void> => {
      const newServiceRequests = await getServiceRequests();
      setServiceRequests(newServiceRequests);
    };
    getRequests();
  }, []);

  const tableConstructor = ['Código', 'Fecha', 'Hora', 'Descripción', 'Detalle', 'Estado'];

  const serviceRequestToTable = (request):TableContent => ({
    headers: tableConstructor,
    data: {
      row: request.map((value) => (
        [
          value.code,
          value.date.toLocaleTimeString().slice(0, value.date.toLocaleTimeString().lastIndexOf(':')),
          value.date.toLocaleDateString(),
          value.service.name,
          <button type="button" className="table__button">Ver</button>,
          <div className="badge-container"><span className={`badge badge--${value.status.toLowerCase()}`}>{value.status}</span></div>,
        ]
      )),
    },
  });

  return (
    <>
      <div className="button-container button-container--rigth">
        <button type="button" className="button button--primary">
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

    </>
  );
};

export default Solicitudes;
