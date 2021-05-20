import { FC, useContext } from 'react';
import { CounterContext } from './CounterProvider';

const ShowCounter: FC = () => {
  const { counter } = useContext(CounterContext);
  return (
    <h3 style={{ color: 'white' }}>
      El contador está en:
      {' '}
      { counter }
    </h3>
  );
};

export default ShowCounter;
