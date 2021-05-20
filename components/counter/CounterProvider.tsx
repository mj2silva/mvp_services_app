import {
  createContext, Dispatch, FC, ReactNode, SetStateAction, useState,
} from 'react';

type CounterProps = {
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>,
}

export const CounterContext = createContext<CounterProps>(null);

type Props = {
  children: ReactNode,
}

const CounterProvider: FC<Props> = ({ children }: Props) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      { children }
    </CounterContext.Provider>
  );
};

export default CounterProvider;
