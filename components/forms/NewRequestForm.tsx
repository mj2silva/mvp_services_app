import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import Select from './formElements/Select';
import Input from './formElements/Input';
import DatePicker from './formElements/DatePicker';
import TimePicker from './formElements/TimePicker';
import Wizard from '../wizard/Wizard';

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
  date: yup.string().required('Debe ingresar una fecha').nullable(),
  context: yup.string().required('Debe ingresar el lugar de la asesoría'),
  service: selectSchema('Debe seleccionar un servicio'),
  modality: selectSchema('Debe seleccionar la modalidad'),
  startTime: selectSchema('Debe seleccionar la hora de inicio'),
  finishTime: selectSchema('Debe seleccionar la hora de cierre'),
}));

const NewRequestForm: FC = () => {
  const formMethods = useForm<RequestFormValues>({ resolver: requestFormValuesSchema });

  const onSubmit: SubmitHandler<any> = (data) => alert(JSON.stringify({ data }));

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...formMethods}>
      <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="form__fields">
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
            label="Contexto/Locación"
            name="context"
          />
          <DatePicker
            label="Fecha"
            name="date"
          />
          <TimePicker
            label="Hora inicio"
            name="startTime"
            size="medium"
          />
          <TimePicker
            label="Hora fin"
            name="finishTime"
            size="medium"
          />
        </div>
        <div className="form__controls">
          <button className="form__button" type="submit">Guardar</button>
        </div>
      </form>
      <Wizard totalPages={6} />
    </FormProvider>
  );
};

export default NewRequestForm;
