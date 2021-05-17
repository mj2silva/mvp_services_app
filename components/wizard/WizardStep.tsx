import { FC, ReactNode } from 'react';
import useWizardContext from './hooks/useWizardContext';

type Props = {
  pageNumber: number,
  children: ReactNode,
}

const WizardStep: FC<Props> = ({ pageNumber, children } : Props) => {
  const { currentPage } = useWizardContext();

  return (currentPage === pageNumber) && (
    <div className="form__step">
      { children }
    </div>
  );
};

export default WizardStep;
