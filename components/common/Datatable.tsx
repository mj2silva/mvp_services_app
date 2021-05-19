import { FC, useState } from 'react';
import ComponentFilter from '../asesorias/ComponentFilter';
import Table, { TableContent } from './Table';

type Props = {
  tableContent: TableContent
}

const Datatable:FC<Props> = ({ tableContent }:Props) => {
  const [statusDate, setStatusDate] = useState<string>(new Date().toLocaleDateString());
  const [statusModality, setStatusModality] = useState<string>("Virtual");
  const [statusState, setStatusState] = useState<string>("Aceptada");
  return(
    <div className="datatable">
      <div className="datatable__filters">
        <div>
          <span className="datatable__filters-title">Filtros</span>
          <button type="button" className="datatable__filter">Fecha</button>
          <button type="button" className="datatable__filter">Modalidad</button>
          <button type="button" className="datatable__filter">Estado</button>
        </div>
        <div className="datatable__filters-applied">
          <ComponentFilter filterContent={statusDate} />
          <ComponentFilter filterContent={statusModality} />
          <ComponentFilter filterContent={statusState} />
        </div>
      </div>
      
      <Table content={tableContent} wrapperClass="datatable" modifier="primary" />
    </div>
  );
};

export default Datatable;
