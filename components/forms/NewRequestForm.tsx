import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import Select from './formElements/Select';
import DateInput from './formElements/DateInput';
import Input from './formElements/Input';

type SelectOption = {
  label: string,
  value: string,
}

type RequestFormValues = {
  date: Date,
  schedule: string,
  context: string,
  service: SelectOption,
  modality: SelectOption,
}

const selectSchema = (message: string) : yup.AnyObjectSchema => yup.object().shape({
  label: yup.string().required(message),
  value: yup.string().required(message),
}).required(message).nullable();

const requestFormValuesSchema = yupResolver(yup.object().shape({
  date: yup.string().required('Debe ingresar una fecha'),
  schedule: yup.string().required('Debe ingresar la hora solicitada'),
  context: yup.string().required('Debe ingresar el lugar de la asesoría'),
  service: selectSchema('Debe seleccionar un servicio'),
  modality: selectSchema('Debe seleccionar la modalidad'),
}));

const NewRequestForm: FC = () => {
  const formMethods = useForm<RequestFormValues>({ resolver: requestFormValuesSchema });

  const onSubmit: SubmitHandler<any> = (data) => alert(JSON.stringify({ data }));

  const contextMethods = formMethods.register('context', { required: true });
  const dateMethods = formMethods.register('date', { required: true });
  const scheduleMethods = formMethods.register('schedule', { required: true });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...formMethods}>
      <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Select
          name="service"
          label="Servicio"
          options={[{ label: 'Asesoria personal', value: '01' }]}
        />
        <Select
          name="modality"
          label="Modalidad"
          options={[{ label: 'Presencial', value: '01' }, { label: 'Virtual', value: '02' }]}
        />
        <Input
          label="Contexto"
          name={contextMethods.name}
          onBlur={contextMethods.onBlur}
          onChange={contextMethods.onChange}
          error={formMethods.formState.errors.context}
        />
        <DateInput
          label="Fecha"
          name={dateMethods.name}
          onBlur={dateMethods.onBlur}
          onChange={dateMethods.onChange}
          error={formMethods.formState.errors.date}
        />
        <Input
          label="Horario"
          name={scheduleMethods.name}
          onBlur={scheduleMethods.onBlur}
          onChange={scheduleMethods.onChange}
          error={formMethods.formState.errors.schedule}
        />
        <button type="submit">Guardar</button>
      </form>
    </FormProvider>
  );
};

export default NewRequestForm;
