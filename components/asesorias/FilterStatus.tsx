import { FC, useState } from "react";
import Modal from "../modal/Modal";

const FilterStatus: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () : void => setIsModalOpen(true);
  const closeModal = () : void => setIsModalOpen(false);
  return (
    <>
      <button type="button" className="datatable__filter" onClick={openModal}>Estado</button>
      <Modal
        title="Solicitudes por Estado"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <div className="filter">
          <div className="filter__content">
            <input type="radio" className="filter__content-radio" id="OptionAccepted" name="Option" />
            <label className="filter__content-label" htmlFor="OptionAccepted">Aceptada</label>
          </div>
          <div className="filter__content">
            <input type="radio" className="filter__content-radio" id="OptionPending" name="Option" />
            <label className="filter__content-label" htmlFor="OptionPending">Pendiente</label>
          </div>
          <div className="filter__content">
            <input type="radio" className="filter__content-radio" id="OptionRejected" name="Option" />
            <label className="filter__content-label" htmlFor="OptionRejected">Rechazada</label>
          </div>
        </div>
        <div className="filter__buttons">
          <button type="button" className="filter__buttons--primary">Aplicar Filtro</button>
        </div>
      </Modal>
    </>
  )
    
}
export default FilterStatus;