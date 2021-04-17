import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

type Props = {
  toggleSidebar?: MouseEventHandler,
}

const defaultProps: Partial<Props> = {
  toggleSidebar: null,
};

const HeaderMenu : FC<Props> = (props: Props) => {
  const { toggleSidebar } = props;
  return (
    <header className="header">
      <div className="header__logo2">
        <Image src="/img/numeral-logo-header.svg" layout="fill" className="header__logo2" />
      </div>
      <button type="button" onClick={toggleSidebar} className="header__close">
        <FontAwesomeIcon className="" icon={faTimesCircle} />
      </button>
    </header>
  );
};

HeaderMenu.defaultProps = defaultProps;

export default HeaderMenu;