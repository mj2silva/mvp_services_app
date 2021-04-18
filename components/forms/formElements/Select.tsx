import { FC } from 'react';
import { ChangeHandler, FieldError } from 'react-hook-form';
import ReactSelect from 'react-select';

type Props = {
  name: string,
  label: string,
  onChange: ChangeHandler,
  onBlur: ChangeHandler,
  error: FieldError,
  options: {
    label: string,
    value: string,
  }[],
}

const Select: FC<Props> = (props: Props) => {
  const {
    name, onChange, onBlur, error, label, options,
  } = props;
  const handleChange = (params) : void => {
    onChange(params);
  };
  return (
    <label className="form__item" htmlFor={name}>
      <span className="form__label">{label}</span>
      <div className="form__select">
        <ReactSelect className="select" classNamePrefix="select" options={options} onChange={handleChange} onBlur={onBlur} />
      </div>
      { error && <span>{ error.message }</span> }
    </label>
  );
};

export default Select;
