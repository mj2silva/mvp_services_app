import { FC, ReactNode } from 'react';
import NoRequests from '../../components/common/NoRequests';

type Props = {
    img: string,
    title: string,
    description?: string,
    button: string,
}

const reportes:FC<Props> = ({ img, title, description, button }:Props) => (
  
  <div className="no-requests-container">   
      <NoRequests img="/img/exam.svg" title="Aún no hay reportes" description="Las asesorías asignadas en proceso o realizadas se mostrarán aquí" button="Solicitar asesoría" />
    
  </div>
);

export default reportes;