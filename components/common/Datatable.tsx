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
    <table className="table table--primary datatable__table ">
      <thead className="table__thead table__thead--primary">
        <tr className="table__thead-tr--primary">
          {
              tableConstructor.map((value) => (
                <th className="table__th table__th--primary">{value}</th>
              ))
            }
        </tr>
      </thead>
      <tbody className="table__tbody table__tbody--primary">
        {
            data.map((value) => (
              <tr className="table__tbody-tr table__tbody-tr--primary" key={value.id}>
                <td className="table__td table__td--primary">{value.code}</td>
                <td className="table__td table__td--primary">{value.date.toLocaleTimeString().slice(0, value.date.toLocaleTimeString().lastIndexOf(':'))}</td>
                <td className="table__td table__td--primary">{value.date.toLocaleDateString()}</td>
                <td className="table__td table__td--primary">{`${value.service.name} ${value.modality}`}</td>
                <td className="table__td table__td--primary"><button type="button" className="table__button">Ver</button></td>
                <td className="table__td table__td--primary"><div className="badge-container"><span className={`badge badge--${value.status.toLowerCase()}`}>{value.status}</span></div></td>
              </tr>
            ))
          }
      </tbody>
    </table>
    <br />
    <br />
    <table className="table table--striped-tbody">
      <thead className="table__thead table__thead--striped-tbody">
        <tr className="table__thead-tr table__thead-tr--striped-tbody">
          {
              tableConstructor.map((value) => (
                <th className="table__th table__th--striped-tbody">{value}</th>
              ))
            }
        </tr>
      </thead>
      <tbody className="table__tbody table__tbody--striped-tbody">
        {
            data.map((value) => (
              <tr className="table__tbody-tr table__tbody-tr--striped-tbody" key={value.id}>
                <td className="table__td table__td--striped-tbody">{value.code}</td>
                <td className="table__td table__td--striped-tbody">{value.date.toLocaleDateString()}</td>
                <td className="table__td table__td--striped-tbody">{value.date.toLocaleTimeString().slice(0, value.date.toLocaleTimeString().lastIndexOf(':'))}</td>
                <td className="table__td table__td--striped-tbody">{`${value.service.name} ${value.modality}`}</td>
                <td className="table__td table__td--striped-tbody"><button type="button" className="table__button">Ver</button></td>
                <td className="table__td table__td--striped-tbody"><div className="badge-container"><span className={`badge badge--${value.status.toLowerCase()}`}>{value.status}</span></div></td>
              </tr>
            ))
          }
      </tbody>
    </table>
  </div>
);

export default Datatable;
