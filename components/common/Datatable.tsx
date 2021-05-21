import { FC } from 'react';
import Table, { TableContent } from '../tables/Table';

type Props = {
  tableContent: TableContent
}

const Datatable:FC<Props> = ({ tableContent }:Props) => (
  <div className="datatable">
    <div className="datatable__filters">
      <span className="datatable__filters-title">Filtros</span>
      <button type="button" className="datatable__filter">Fecha</button>
      <button type="button" className="datatable__filter">Modalidad</button>
      <button type="button" className="datatable__filter">Estado</button>
    </div>
    <Table content={tableContent} wrapperClass="datatable" modifier="primary" />
  </div>
);

export default Datatable;
