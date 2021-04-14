import { FC } from 'react';

type Props = {
  isOpen?: boolean,
}

const defaultProps : Partial<Props> = {
  isOpen: false,
};

const RoleClosed : FC = () => (
  <button type="button" className="config__row-container">
    <span className="config__row-container-head">Rol</span>
    <div className="config__row-container-body">
      Apoderado:
      <span className="config__row-container-slim">Padre</span>
    </div>
    <div className="config__row-container-option">Ver</div>
  </button>
);

const RoleOpen : FC = () => (
  <div className="config__row-container">
    <span className="config__row-container-head">Rol</span>
    <div className="config__row-container-body">
      <div className="config__row-container-action--visible">
        <div className="datatable">
          <div className="datatable__filters">
            <span className="datatable__filters-title">Eres apoderado de los siguientes estudiantes:</span>
          </div>
          <table className="table table--primary datatable__table">
            <thead className="table__thead">
              <tr>
                <th>DNI</th>
                <th>Estudiante</th>
                <th>Parentesco</th>
                <th>Detalle</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345678</td>
                <td>Lisa Juárez</td>
                <td>Padre</td>
                <td><button type="button" className="table__button">Ver</button></td>
                <td><span className="badge badge--aceptado">Activo</span></td>
              </tr>
              <tr>
                <td>87654321</td>
                <td>Cielo Juárez</td>
                <td>Tutor</td>
                <td><button type="button" className="table__button">Ver</button></td>
                <td><span className="badge badge--aceptado">Inactivo</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="config__row-buttons-container">
          <button type="button" className="">Cerrar</button>
          <button type="button" className="">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
);

const Role : FC<Props> = (props : Props) => {
  const { isOpen } = props;
  return isOpen ? <RoleOpen /> : <RoleClosed />;
};

Role.defaultProps = defaultProps;

export default Role;
