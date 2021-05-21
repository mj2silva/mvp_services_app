import { FC, useState, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Props = {
  children: ReactNode,
  title: string
}

const Accordion:FC<Props> = ({ children, title }:Props) => {
  const [iconFaChevronDown, setIconFaChevronDown] = useState<IconDefinition>(faChevronUp);
  const [status, setIStatus] = useState<string>('visible');
  const [iconStatus, setIconStatus] = useState<string>('hidden');

  const handleArrow = ():void => {
    setIconFaChevronDown((iconFaChevronDown === faChevronDown) ? faChevronUp : faChevronDown);
    setIconStatus((iconStatus === 'hidden') ? 'visible' : 'hidden');
  };

  const accord = ():void => {
    setIStatus((status === 'visible') ? 'hidden' : 'visible');
  };

  const firstAccordion = ():void => {
    handleArrow();
    accord();
  };

  return (
    <div className="accordion-container">

      <button type="button" onClick={firstAccordion} className="accordion-title">
        {title}
        <FontAwesomeIcon className="arrow" icon={iconFaChevronDown} />
      </button>

      <ul className={`accordion-content accordion-content--${status}`}>
        {children}
      </ul>
    </div>
  );
};
export default Accordion;
