import { FC } from 'react';

type Props = {
  status: string
}
const StatusBadge:FC<Props> = ({ status }:Props) => (
  (status) ? (
    <div className="badge-container"><span className={`badge badge--${status.toLowerCase()}`}>{status}</span></div>
  ) : (
    <> </>
  )
);

export default StatusBadge;
