import { FC, useEffect, useState } from 'react';
import { getServiceRequests } from '../../lib/serviceRequestsApi';
import { ServiceRequest } from '../../lib/types';

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
            <div className="datatable">
              <div className="datatable__filters">
                <span className="datatable__filters-title">Filtros</span>
                <button type="button" className="datatable__filter">Fecha</button>
                <button type="button" className="datatable__filter">Modalidad</button>
                <button type="button" className="datatable__filter">Estado</button>
              </div>
              <table className="table table--primary datatable__table">
                <thead className="table__thead">
                  <tr>
                    <th>Código</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Descripción</th>
                    <th>Detalle</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SS025</td>
                    <td>19/03/2021</td>
                    <td>22:30</td>
                    <td>Asesoría Personal Virtual</td>
                    <td><button type="button" className="table__button">Ver</button></td>
                    <td><span className="badge badge--aceptado">Aceptada</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
          : <h1>Cargando</h1>
      }

    </>
  );
};

export default Solicitudes;
