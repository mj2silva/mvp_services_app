import { FC } from 'react';
import { useController } from 'react-hook-form';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';

type SelectOption = {
  label: string,
  value: string,
}

const options: SelectOption[] = [
  { label: '07:00 am', value: '7' },
  { label: '08:00 am', value: '8' },
  { label: '09:00 am', value: '9' },
  { label: '10:00 am', value: '10' },
  { label: '11:00 am', value: '11' },
  { label: '12:00 am', value: '12' },
  { label: '01:00 pm', value: '13' },
  { label: '02:00 pm', value: '14' },
  { label: '03:00 pm', value: '15' },
  { label: '04:00 pm', value: '16' },
  { label: '05:00 pm', value: '17' },
  { label: '06:00 pm', value: '18' },
  { label: '07:00 pm', value: '19' },
  { label: '08:00 pm', value: '20' },
  { label: '09:00 pm', value: '21' },
  { label: '10:00 pm', value: '22' },
  { label: '11:00 pm', value: '23' },
  { label: '12:00 am', value: '0' },
];

type Props = ReactSelectProps & {
  name: string,
  label: string,
  defaultValue?: SelectOption,
  size?: 'large' | 'medium' | 'small',
}

const defaultProps: Partial<Props> = {
  defaultValue: null,
  size: 'large',
};

const TimePicker: FC<Props> = (props: Props) => {
  const {
    name, label, defaultValue, size,
  } = props;
  const { field, fieldState } = useController({ name });
  return (
    <label className={`form__field ${(size === 'medium') ? 'form__field--medium' : ''}`} htmlFor="service">
      <span className={`form__label ${field.value ? 'form__label--focused' : ''}`}>{label}</span>
      <ReactSelect
        className="select"
        classNamePrefix="select"
        options={options}
        onChange={field.onChange}
        onBlur={field.onBlur}
        defaultValue={defaultValue}
        menuPlacement="auto"
      />
      { fieldState.error && <span className="form__field-error">{ fieldState.error?.message }</span> }
    </label>
  );
};

TimePicker.defaultProps = defaultProps;

export default TimePicker;
