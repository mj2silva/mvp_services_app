import { FC } from 'react';
import { useController } from 'react-hook-form';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';

type SelectOption = {
  label: string,
  value: string,
}

type Props = ReactSelectProps & {
  name: string,
  label: string,
  defaultValue?: SelectOption,
  options: SelectOption[],
}

const defaultProps: Partial<Props> = {
  defaultValue: null,
};

const Select: FC<Props> = (props: Props) => {
  const {
    name, options, label, defaultValue,
  } = props;
  const { field, fieldState } = useController({ name, defaultValue });
  return (
    <label className="form__field" htmlFor={field.name}>
      <span className={`form__label ${field.value ? 'form__label--focused' : ''}`}>{label}</span>
      <div className="form__select">
        <ReactSelect
          className="select"
          classNamePrefix="select"
          options={options}
          onChange={field.onChange}
          onBlur={field.onBlur}
          defaultValue={defaultValue}
          menuPlacement="auto"
        />
      </div>
      { fieldState.error && <span className="form__field-error">{ fieldState.error?.message }</span> }
    </label>
  );
};

Select.defaultProps = defaultProps;

export default Select;
