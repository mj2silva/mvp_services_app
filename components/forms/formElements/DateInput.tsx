import { FC } from 'react';
import { ChangeHandler, FieldError } from 'react-hook-form';

type Props = {
  name: string,
  label: string,
  onChange: ChangeHandler,
  onBlur: ChangeHandler,
  error: FieldError,
}

const DateInput: FC<Props> = (props: Props) => {
  const {
    name, onChange, onBlur, error, label,
  } = props;
  return (
    <label className="form__field" htmlFor="service">
      <span className="form__label">{label}</span>
      <input className="form__input" type="date" name={name} onBlur={onBlur} onChange={onChange} />
      { error && <span>{ error.message }</span> }
    </label>
  );
};

export default DateInput;
