import { FC, useState } from 'react';
import ComponentFilterApplied from './ComponentFilterApplied';
import Table, { TableContent } from './Table';

type Props = {
  tableContent: TableContent
}

const Datatable:FC<Props> = ({ tableContent }:Props) => {
  return(
    <div className="datatable">
      <div className="datatable__filters">
        <div>
          <span className="datatable__filters-title">Filtros</span>
          <button type="button" className="datatable__filter">Fecha</button>
          <button type="button" className="datatable__filter">Modalidad</button>
          <button type="button" className="datatable__filter">Estado</button>
        </div>
        <ComponentFilterApplied />
      </div>
      
      <Table content={tableContent} wrapperClass="datatable" modifier="primary" />
    </div>
  );
};

export default Datatable;
