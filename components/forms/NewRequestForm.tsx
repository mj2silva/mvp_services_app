import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import DateInput from './formElements/DateInput';
import Input from './formElements/Input';
import Select from './formElements/Select';

const NewRequestForm: FC = () => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

  console.log(watch('service'));

  const onSubmit: SubmitHandler<any> = (data) => console.log({ data });

  const serviceMethods = register('service', { required: true });
  const modalityMethods = register('modality', { required: true });
  const contextMethods = register('context', { required: true });
  const dateMethods = register('date', { required: true });
  const scheduleMethods = register('schedule', { required: true });
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Select
        label="Servicio"
        name={serviceMethods.name}
        onBlur={serviceMethods.onBlur}
        onChange={serviceMethods.onChange}
        error={errors.service}
        options={[{ label: 'Asesoria personal', value: '01' }]}
      />
      <Select
        label="Modalidad"
        name={modalityMethods.name}
        onBlur={modalityMethods.onBlur}
        onChange={modalityMethods.onChange}
        error={errors.modality}
        options={[{ label: 'Virtual', value: '01' }, { label: 'Presencial', value: '02' }]}
      />
      <Input
        label="Contexto"
        name={contextMethods.name}
        onBlur={contextMethods.onBlur}
        onChange={contextMethods.onChange}
        error={errors.context}
      />
      <DateInput
        label="Fecha"
        name={dateMethods.name}
        onBlur={dateMethods.onBlur}
        onChange={dateMethods.onChange}
        error={errors.date}
      />
      <Input
        label="Horario"
        name={scheduleMethods.name}
        onBlur={scheduleMethods.onBlur}
        onChange={scheduleMethods.onChange}
        error={errors.schedule}
      />

      <button type="submit">Guardar</button>
    </form>
  );
};

export default NewRequestForm;
