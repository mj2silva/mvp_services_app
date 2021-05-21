import { FC } from 'react';
import { Cell } from '../Table';

type Props = {
  typeRow: string,
  modifier: string,
  cells: Cell[]
}

const Trow:FC<Props> = ({ typeRow, modifier, cells }:Props) => (
  <tr className={`table__${typeRow}-tr table__${typeRow}-tr--${modifier}`}>
    {
      cells.map((cell) => (
        (typeRow === 'thead') ? (
          <th className={`table__th table__th--${modifier}`}>{cell || '-'}</th>
        ) : (
          <td className={`table__td table__td--${modifier}`}>{cell || '-'}</td>
        )
      ))
    }
  </tr>
);

export default Trow;
