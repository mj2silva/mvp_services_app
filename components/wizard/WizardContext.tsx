import { createContext } from 'react';

const wizardDefaultValues = {
  currentPage: null,
  totalPages: null,
  data: null,
  goToPage: null,
  setTotalPages: null,
  goToNextPage: null,
  goToPrevPage: null,
};

const WizardContext = createContext(wizardDefaultValues);

export default WizardContext;
