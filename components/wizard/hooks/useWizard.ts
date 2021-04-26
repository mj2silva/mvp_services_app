import { useState } from 'react';

type Props = {
  totalPages: number,
  initialPage?: number,
  onSubmit?: (data) => Promise<void> | void,
}

const useWizard = (props: Props) => {
  const { totalPages: pagesCount, initialPage } = props;
  const [currentPage, setCurrentPage] = useState<number>(initialPage || 1);
  const [totalPages, setTotalPages] = useState<number>(pagesCount);
  const [data, setData] = useState(null);

  const goToNextPage = () : void => {
    if (currentPage < totalPages) {
      return setCurrentPage(currentPage + 1);
    }
    throw new Error('Ya no existen más páginas');
  };

  const goToPrevPage = () : void => {
    if (currentPage > 1) {
      return setCurrentPage(currentPage - 1);
    }
    throw new Error('Ya no se puede seguir retrocediendo');
  };

  const goToPage = (pageNumber: number) : void => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      return setCurrentPage(pageNumber);
    }
    throw new Error('El número de página debe ser positivo y menor que el total de páginas');
  };

  return {
    goToNextPage,
    goToPrevPage,
    goToPage,
    setTotalPages,
    currentPage,
    totalPages,
    data,
  };
};

export default useWizard;
