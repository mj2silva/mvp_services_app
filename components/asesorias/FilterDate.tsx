import { FC, useState } from "react";
import ReactDatePicker from "react-datepicker";
import DatePicker from "../forms/formElements/DatePicker";
import Modal from "../modal/Modal";

const FilterDate: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () : void => setIsModalOpen(true);
  const closeModal = () : void => setIsModalOpen(false);
  const [startDate, setStartDate] = useState<Date | [Date, Date]>(new Date());
  
  return (
    <>
      <button type="button" className="datatable__filter" onClick={openModal}>Fecha</button>
      <Modal
        title="Solicitudes por Fecha"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <div className="filter">
          <div className="filter__content">
            <label className="form__field" htmlFor="service">
            <span className={'filter__label'}>Fecha</span>
            <ReactDatePicker
              popperPlacement="auto-start"
              dropdownMode="select"
              locale="es"
              className="filter__input filter-datepicker"
              calendarClassName="filter-datepicker__calendar"
              wrapperClassName="filter-datepicker__wrapper"
              popperClassName="filter-datepicker__popper"
              dayClassName={() => 'filter-datepicker__day'}
              monthClassName={() => 'filter-datepicker__month'}
              weekDayClassName={() => 'filter-datepicker__weekday'}
              timeClassName={() => 'filter-datepicker__time'}
              name="Date"
              selected={startDate[0] || startDate}
              onChange={date => {setStartDate(date);}}
              autoComplete="off"
            />
            </label>
          </div>
        </div>
        <div className="filter__buttons">
          <button type="button" className="filter__buttons--primary">Aplicar Filtro</button>
        </div>
      </Modal>
    </>
  )
    
}
export default FilterDate;