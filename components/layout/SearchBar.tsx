import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const SearchBar : FC = () => {
  const [iconSearch, setIconSearch] = useState<IconDefinition>(faSearch);
  const [barStatus, setBarStatus] = useState<string>('hidden');

  const handleSearchBar = ():void => {
    setIconSearch((iconSearch === faSearch) ? faChevronLeft : faSearch);
    setBarStatus((barStatus === 'hidden') ? 'visible' : 'hidden');
  };

  return (
    <>
      <button type="button" onClick={handleSearchBar} className="header-search-toggle-container">
        <FontAwesomeIcon className="header-search-toggle" icon={iconSearch} />
      </button>
      <input type="text" className={`header-search-bar header-search-bar--${barStatus}`} />
    </>
  );
};

export default SearchBar;
