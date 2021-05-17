import { FC } from 'react';
import useWizardContext from './hooks/useWizardContext';

const activeClassName = 'form__page-indicator form__page-indicator--active';
const disabledClassName = 'form__page-indicator form__page-indicator--disabled';

type WizardIndicatorProps = {
  currentPage: number,
  index: number,
}

const WizardPageIndicatorBar: FC<WizardIndicatorProps> = ({
  currentPage,
  index,
}: WizardIndicatorProps) => (
  <div className={currentPage >= index ? activeClassName : disabledClassName} />
);

const WizardPageIndicator: FC = () => {
  const { currentPage, totalPages } = useWizardContext();
  return (
    <div className="form__page-indicators">
      {
        Array.from(Array(totalPages)).map((value, index) => (
          <WizardPageIndicatorBar
            currentPage={currentPage}
            index={index + 1}
          />
        ))
      }
    </div>
  );
};

export default WizardPageIndicator;
