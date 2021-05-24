import { FC } from 'react';
import { Cell } from '../Table';
import Trow from './Trow';

type Props = {
  modifier: string,
  headers: Cell[]
}

const Thead:FC<Props> = ({ modifier, headers } : Props) => (
  <thead className={`table__thead table__thead--${modifier}`}>
    <Trow typeRow="thead" modifier={modifier} cells={headers} />
  </thead>
);

export default Thead;
