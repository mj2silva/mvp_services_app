import { FC } from 'react';
import { useController } from 'react-hook-form';

type Props = {
  name: string,
  label: string,
}

const Input: FC<Props> = (props: Props) => {
  const {
    name, label,
  } = props;
  const { field, fieldState } = useController({ name });
  return (
    <label className="form__field" htmlFor={name}>
      <span className={`form__label ${(field.value) ? 'form__label--focused' : ''}`}>{label}</span>
      <input className="form__input" type="text" name={name} onBlur={field.onBlur} onChange={field.onChange} />
      { fieldState.error && <span className="form__field-error">{ fieldState.error?.message }</span> }
    </label>
  );
};

export default Input;
