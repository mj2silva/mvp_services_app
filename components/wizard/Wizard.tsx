import { FC } from 'react';
import useWizard from './hooks/useWizard';
import WizardContext from './WizardContext';
import WizardControls from './WizardControls';

type Props = {
  totalPages: number
}

const Wizard: FC<Props> = ({ totalPages }: Props) => (
  <WizardContext.Provider value={useWizard({ totalPages })}>
    <WizardControls />
  </WizardContext.Provider>
);

export default Wizard;
