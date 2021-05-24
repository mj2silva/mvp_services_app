import { FC, ReactNode } from 'react';
import Thead from './tableElements/Thead';
import Tbody from './tableElements/Tbody';

export type Cell = ReactNode;

export type Row = Cell[];

export type TableContent = {
  headers: Cell[],
  data: {
    rows: Row[]
  },
}

type Props = {
  content: TableContent
  wrapperClass: string,
  modifier: string,
  noResults?: ReactNode
};

const defaultNoResults:ReactNode = (
  <div className="table__noResults">
    <span className="table__noResults--bold">Ups! No se encontraron solicitudes. </span>
    Inténtalo nuevamente.
  </div>
);

const defaultProps = {
  noResults: defaultNoResults,
};

const Table:FC<Props> = ({
  content, wrapperClass, modifier, noResults,
}:Props) => (
  <table className={`table table--${modifier} ${wrapperClass}__table `}>
    <Thead headers={content.headers} modifier={modifier} />
    <Tbody
      rows={content.data.rows}
      modifier={modifier}
      columns={content.headers.length}
      noResults={noResults}
    />
  </table>
);

Table.defaultProps = defaultProps;

export default Table;
