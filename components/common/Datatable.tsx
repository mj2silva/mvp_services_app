import { FC } from 'react';
import Table, { TableContent } from './Table';
import FilterDate from '../asesorias/FilterDate'
import FilterModality from '../asesorias/FilterModality';
import FilterStatus from '../asesorias/FilterStatus';

type Props = {
  tableContent: TableContent
}

const Datatable:FC<Props> = ({ tableContent }:Props) => (
  <div className="datatable">
    <div className="datatable__filters">
      <span className="datatable__filters-title">Filtros</span>
      <FilterDate />
      <FilterModality />
      <FilterStatus />
    </div>
    <Table content={tableContent} wrapperClass="datatable" modifier="primary" />
  </div>
);

export default Datatable;
