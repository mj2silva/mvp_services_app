import { FC } from 'react';
import NoRequests from '../../components/common/NoRequests';

const reportes:FC = () => (

  <div className="no-requests-container">
    <NoRequests
      img="/img/exam.svg"
      title="Aún no hay reportes"
      description="Las asesorías asignadas en proceso o realizadas se mostrarán aquí"
      button="Solicitar asesoría"
    />
  </div>
);

export default reportes;
