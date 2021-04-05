import { FC, ReactNode } from 'react';
import UserContext from '../../lib/userContext';

type Props = {
  children: ReactNode,
}

const UserProvider : FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <UserContext.Provider value={{ username: 'ManuelSilva', id: 'asdasdasjhifbq98hon3i0hi0' }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
