import { FC } from 'react';
import Table, { TableContent } from '../tables/Table';
import ComponentFilterApplied from './ComponentFilterApplied';
import Filters from './Filters';

type Props = {
  tableContent: TableContent
}

const Datatable:FC<Props> = ({ tableContent }:Props) => (
  <div className="datatable">
    <div className="datatable__filters">
      <Filters />
      <ComponentFilterApplied />
    </div>
    <Table content={tableContent} wrapperClass="datatable" modifier="primary" />
  </div>
);

export default Datatable;
