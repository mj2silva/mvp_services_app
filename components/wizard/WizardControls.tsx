import useWizardContext from './hooks/useWizardContext';

const WizardControls = () => {
  const {
    goToNextPage, goToPrevPage, currentPage, totalPages,
  } = useWizardContext();
  const isFinish = () : boolean => currentPage === totalPages;
  const isStart = () : boolean => currentPage === 1;
  return (
    <div className="form__controls">
      <button disabled={isStart()} onClick={goToPrevPage} className="form__button" type="submit">Anterior</button>
      {
        (isFinish())
          ? <button className="form__button" type="submit">Confirmar</button>
          : <button disabled={isFinish()} onClick={goToNextPage} className="form__button" type="submit">Siguiente</button>
      }
    </div>
  );
};

export default WizardControls;
