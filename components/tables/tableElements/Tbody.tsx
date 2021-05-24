import { FC, ReactNode } from 'react';
import { Row } from '../Table';
import Trow from './Trow';

type Props = {
  modifier: string,
  rows: Row[],
  columns: number,
  noResults: ReactNode
}

const Tbody:FC<Props> = ({
  modifier, rows, columns, noResults,
} : Props) => (
  <tbody className={`table__tbody table__tbody--${modifier}`}>
    {
      (rows.length > 0)
        ? (
          rows.map((row) => (
            <Trow typeRow="tbody" modifier={modifier} cells={row} />
          ))
        ) : (
          <td className={`table__td table__td--${modifier} table__td--empty`} colSpan={columns}>
            { noResults }
          </td>
        )
    }
  </tbody>
);

export default Tbody;
