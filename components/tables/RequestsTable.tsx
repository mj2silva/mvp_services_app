import { FC, useEffect, useState } from 'react';
import { getServiceRequests } from '../../lib/serviceRequestsApi';
import { ServiceRequest } from '../../lib/types';
import Spinner from '../Loading/Spinner';
import Datatable from '../common/Datatable';
import ServiceRequestDetail from '../common/ServiceRequestDetail';
import {
  shortDate, time, capitalize,
} from '../../lib/formatter';

import { TableContent } from './Table';
import StatusBadge from '../common/StatusBadge';

const RequestsTable:FC = () => {
  const [serviceRequests, setServiceRequests] = useState(null);

  useEffect(() => {
    const getRequests = async ():Promise<void> => {
      const newServiceRequests = await getServiceRequests();
      setServiceRequests(newServiceRequests);
    };
    getRequests();
  }, []);

  const tableHeaders = ['Código', 'Hora', 'Fecha', 'Descripción', 'Detalle', 'Estado'];

  const serviceRequestToTable = (requests: ServiceRequest[]):TableContent => ({
    headers: tableHeaders,
    data: {
      rows: requests.map((value) => (
        [
          value.code,
          time(value.serviceDate),
          shortDate(value.serviceDate),
          capitalize([value.serviceType, value.modality]),
          <ServiceRequestDetail serviceRequest={value} />,
          <StatusBadge status={value.status} />,
        ]
      )),
    },
  });

  return (
    <>
      {
        serviceRequests
          ? (
            <Datatable tableContent={serviceRequestToTable(serviceRequests)} />
          )
          : (
            <div className="requests-table__spinner">
              <Spinner />
            </div>
          )
      }
    </>
  );
};

export default RequestsTable;
