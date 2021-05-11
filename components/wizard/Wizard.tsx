import { FC, ReactNode } from 'react';
import useWizard from './hooks/useWizard';
import WizardContext from './WizardContext';
import WizardControls from './WizardControls';
import WizardPageIndicator from './WizardPageIndicator';

type Props = {
  children: ReactNode,
}

const Wizard: FC<Props> = (props: Props) => {
  const { children } = props;
  const totalPages = (Array.isArray(children)) ? children.length : 1;
  return (
    <WizardContext.Provider value={useWizard({ totalPages })}>
      <WizardPageIndicator />
      { children }
      <WizardControls />
    </WizardContext.Provider>
  );
};

export default Wizard;
