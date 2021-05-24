import { FC } from 'react';
import NoRequests from '../../components/common/NoRequests';

const contrato:FC = () => (

  <div className="no-requests-container">
    <NoRequests
      img="/img/exam.svg"
      title="Aún no hay contratos"
      description="Las asesorías asignadas en proceso o realizadas se mostrarán aquí"
      button="Solicitar asesoría"
    />
  </div>
);

export default contrato;
