import { FC, ReactNode } from 'react';

export type Cell = ReactNode;

export type Row = Cell[];

export type TableContent = {
  headers: Cell[],
  data: {
    row: Row[]
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
    <thead className={`table__thead table__thead--${modifier}`}>
      <tr className={`table__thead-tr--${modifier}`}>
        {
          content.headers.map((value) => (
            <th className={`table__th table__th--${modifier}`}>{value}</th>
          ))
        }
      </tr>
    </thead>
    <tbody className={`table__tbody table__tbody--${modifier}`}>
      {
        content.data.row.map((row) => (
          <tr className={`table__tbody-tr table__tbody-tr--${modifier}`}>
            {
              row.map((cell) => (
                <td className={`table__td table__td--${modifier}`}>{cell}</td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default Table;
