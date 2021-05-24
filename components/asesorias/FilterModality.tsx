import { FC, useState } from "react";
import Modal from "../modal/Modal";

const FilterModality: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () : void => setIsModalOpen(true);
  const closeModal = () : void => setIsModalOpen(false);
  return (
    <>
      <button type="button" className="datatable__filter" onClick={openModal}>Modalidad</button>
      <Modal
        title="Solicitudes por Modalidad"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <div className="filter">
          <div className="filter__content">
            <input type="radio" className="filter__content-radio" id="OptionVirtual" name="Option" />
            <label className="filter__content-label" htmlFor="OptionVirtual">Modo Virtual</label>
          </div>
          <div className="filter__content">
            <input type="radio" className="filter__content-radio" id="OptionPresencial" name="Option" />
            <label className="filter__content-label" htmlFor="OptionPresencial">Modo Presencial</label>
          </div>
        </div>
        <div className="filter__buttons">
          <button type="button" className="filter__buttons--primary">Aplicar Filtro</button>
        </div>
      </Modal>
    </>
  )
    
}
export default FilterModality;