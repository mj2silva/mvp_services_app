import { FC, ReactNode } from 'react';

export type Cell = ReactNode;

export type Row = Cell[];

export type FilterContent = {
  headers: Cell[],
  data: {
    row: Row[]
  },
}

type Props = {
  content: FilterContent
  wrapperClass: string,
  modifier: string
};

const Filter:FC<Props> = ({
  content, wrapperClass, modifier,
}:Props) => (
  
);

export default Filter;
