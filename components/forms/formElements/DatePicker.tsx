import { FC } from 'react';
import { useController } from 'react-hook-form';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

registerLocale('es', es);

type Props = {
  name: string,
  label: string,
}

const DatePicker: FC<Props> = (props: Props) => {
  const {
    name, label,
  } = props;
  const { field, fieldState } = useController({ name });
  return (
    <label className="form__field" htmlFor="service">
      <span className={`form__label ${(field.value) ? 'form__label--focused' : ''}`}>{label}</span>
      <ReactDatePicker
        popperPlacement="auto-start"
        dropdownMode="select"
        locale="es"
        selected={field.value}
        className="form__input react-datepicker"
        calendarClassName="react-datepicker__calendar"
        wrapperClassName="react-datepicker__wrapper"
        popperClassName="react-datepicker__popper"
        dayClassName={() => 'react-datepicker__day'}
        monthClassName={() => 'react-datepicker__month'}
        weekDayClassName={() => 'react-datepicker__weekday'}
        timeClassName={() => 'react-datepicker__time'}
        onChange={field.onChange}
        name={name}
        autoComplete="off"
      />
      { fieldState.error && <span className="form__field-error">{ fieldState.error?.message }</span> }
    </label>
  );
};

export default DatePicker;
