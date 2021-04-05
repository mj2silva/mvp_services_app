import { FC } from 'react';
import { ServiceRequest } from '../../lib/types';

type Props = {
  data: ServiceRequest[]
}

const tableConstructor = ['Código', 'Fecha', 'Hora', 'Descripción', 'Detalle', 'Estado'];

const Datatable:FC<Props> = ({ data }:Props) => (
  <div className="datatable">
    <div className="datatable__filters">
      <span className="datatable__filters-title">Filtros</span>
      <button type="button" className="datatable__filter">Fecha</button>
      <button type="button" className="datatable__filter">Modalidad</button>
      <button type="button" className="datatable__filter">Estado</button>
    </div>
    <table className="table table--primary datatable__table">
      <thead className="table__thead datatable__thead">
        <tr>
          {
              tableConstructor.map((value) => (
                <th>{value}</th>
              ))
            }
        </tr>
      </thead>
      <tbody className="table__tbody datatable__tbody">
        {
            data.map((value) => (
              <tr key={value.id}>
                <td>{value.code}</td>
                <td>{value.date.toLocaleDateString()}</td>
                <td>{value.date.toLocaleTimeString().slice(0, value.date.toLocaleTimeString().lastIndexOf(':'))}</td>
                <td>{`${value.service.name} ${value.modality}`}</td>
                <td><button type="button" className="table__button">Ver</button></td>
                <td><div className="badge-container"><span className={`badge badge--${value.status.toLowerCase()}`}>{value.status}</span></div></td>
              </tr>
            ))
          }
      </tbody>
    </table>
  </div>
);

export default Datatable;
