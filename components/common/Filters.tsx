import { FC } from 'react';
import FilterDate from '../asesorias/FilterDate';
import FilterModality from '../asesorias/FilterModality';
import FilterStatus from '../asesorias/FilterStatus';

const Filters: FC = () => (
  <div>
    <span className="datatable__filters-title">Filtros</span>
    <FilterDate />
    <FilterModality />
    <FilterStatus />
  </div>
);

export default Filters;
