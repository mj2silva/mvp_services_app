import { FC, useEffect, useState } from 'react';
import { getServiceRequests } from '../../lib/serviceRequestsRepository';
import { ServiceRequest } from '../../lib/types';
import Spinner from '../../components/Loading/Spinner';
import Datatable from '../../components/common/Datatable';
import { TableContent } from '../../components/common/Table';
import NewRequestButton from '../../components/asesorias/NewRequestButton';

const Solicitudes:FC = () => {
  const [serviceRequests, setServiceRequests] = useState(null);

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
          value.codigo,
          value.serviceDate.toLocaleDateString(),
          value.serviceDate.toLocaleTimeString().slice(0, value.serviceDate.toLocaleTimeString().lastIndexOf(':')),
          value.serviceType,
          <button type="button" className="table__button" onClick={() => {}}>Ver</button>,
          <div className="badge-container"><span className={`badge badge--${value.status?.toLowerCase()}`}>{value.status}</span></div>,
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
