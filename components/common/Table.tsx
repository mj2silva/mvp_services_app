import { FC, ReactNode } from 'react';
import Thead from '../tables/tableElements/Thead';
import Tbody from '../tables/tableElements/Tbody';

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
  modifier: string
};

const Table:FC<Props> = ({
  content, wrapperClass, modifier,
}:Props) => (
  <table className={`table table--${modifier} ${wrapperClass}__table `}>
    <Thead headers={content.headers} modifier={modifier} />
    <Tbody rows={content.data.rows} modifier={modifier} />
  </table>
);

export default Table;
