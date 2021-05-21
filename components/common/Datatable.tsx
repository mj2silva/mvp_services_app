import { FC } from 'react';
import Table, { TableContent } from './Table';
import Filters from './Filters';

type Props = {
  tableContent: TableContent
}

const Datatable:FC<Props> = ({ tableContent }:Props) => (
  <div className="datatable">
    <Filters />
    <Table content={tableContent} wrapperClass="datatable" modifier="primary" />
  </div>
);

export default Datatable;
