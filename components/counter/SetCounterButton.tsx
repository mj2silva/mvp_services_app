import { FC, MouseEventHandler, useContext } from 'react';
import { CounterContext } from './CounterProvider';

const SetCounterButton: FC = () => {
  const { setCounter } = useContext(CounterContext);
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => setCounter(
    (counter) => counter + 1,
  );
  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Aumentar
    </button>
  );
};

export default SetCounterButton;
