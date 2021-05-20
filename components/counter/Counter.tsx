import { FC } from 'react';
import CounterProvider from './CounterProvider';
import SetCounterButton from './SetCounterButton';
import ShowCounter from './ShowCounter';

const Counter: FC = () => (
  <CounterProvider>
    <SetCounterButton />
    <ShowCounter />
  </CounterProvider>
);

export default Counter;
