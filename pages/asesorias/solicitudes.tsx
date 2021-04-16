import { FC, useEffect, useState } from 'react';
import { getServiceRequests } from '../../lib/serviceRequestsApi';
import { ServiceRequest } from '../../lib/types';
import Spinner from '../../components/Loading/Spinner';
import Datatable from '../../components/common/Datatable';

const Solicitudes:FC = () => {
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>(null);

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
        <button type="button" className="button button--primary">
          Crear solicitud
        </button>
      </div>
      {
        serviceRequests
          ? (
            <Datatable data={serviceRequests} />
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
