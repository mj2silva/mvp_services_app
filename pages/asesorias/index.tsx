import { FC } from 'react';
import Options from '../../components/asesorias/Options';
import OptionCard from '../../components/asesorias/OptionCard';

const HomeAsesorias:FC = () => (

  <>
    <p className="text text--medium">
      Obtén el asesor académico ideal que tu hijo necesita
    </p>
    <ul className="list-text">
      <li className="list-text__element text--short">
        Ahorra tiempo y dinero.
        <span className="text text--short text--light">
          {' Nosotros nos encargamos de la búsqueda y asignación.'}
        </span>
      </li>
      <li className="list-text__element text--short">
        Es rápido, fácil y accesible.
        <span className="text text--short text--light">
          {' Sólo necesitas solicitar.'}
        </span>
      </li>
    </ul>
    <Options title="Elige una opción">
      <OptionCard
        title="Solicitar Demostración Virtual Gratuita"
        img="/img/amor.svg"
        description="Pruébalo gratis antes de contratar"
      />
      <OptionCard
        title="Solicitar Asesoría Personal Virtual"
        img="/img/escritorio.svg"
        description="Se servicio se realizará a través de Skype"
      />
      <OptionCard
        title="Solicitar Asesoría Personal Presencial"
        img="/img/perfil.svg"
        description="El asesor asignado brindará el servicio a domicilio"
      />
    </Options>
  </>
);

export default HomeAsesorias;
