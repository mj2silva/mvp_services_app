import React, { FC, useEffect, useState } from 'react';
import Table, { TableContent } from '../../components/common/Table';

type Props = {
  openedId?: number,
  id: number,
  changeOpened: (id?: number) => void;
}

const defaultProps : Partial<Props> = {
  openedId: 0,
};

type RoleClosedProps = {
  handleOpen: () => void;
}

const RoleClosed : FC<RoleClosedProps> = (props : RoleClosedProps) => {
  const { handleOpen } = props;
  return (
    <button onClick={handleOpen} type="button" className="config__row-container">
      <span className="config__row-container-head">Rol</span>
      <div className="config__row-container-body">
        Apoderado:
        <span className="config__row-container-slim">Padre</span>
      </div>
      <div className="config__row-container-option">Ver</div>
    </button>
  );
};

type RoleOpenProps = {
  handleClose: () => void;
}

const RoleOpen : FC<RoleOpenProps> = (props : RoleOpenProps) => {
  const TableConstructor = ['DNI','Estudiante','Parentesco','Detalle','Estado'];

  const TableContent = {
    headers: TableConstructor,
    data: {
      row: [
        ['12345678','Lisa Juárez','Padre',<button type="button" className="table__button">Ver</button>,<div className="badge-container"><span className="badge badge--aceptada">Inactivo</span></div>],
        ['87654321','Cielo Juárez','Tutor',<button type="button" className="table__button">Ver</button>,<div className="badge-container"><span className="badge badge--rechazada">Inactivo</span></div>],
      ]
    }
  };

  const { handleClose } = props;

  return (
    <>
      <div className="config__row-selected">
        <span className="config__row-container-headselected">Rol</span>
        <div className="config__row-container-body">
          <div className="config__row-container-action">
            <div className="config__row-container-bodyselected">
              Apoderado
            </div>
            <div className="config__row-container-slim">
              Eres apoderado de los siguientes estudiantes:
            </div>
              <Table content={TableContent} wrapperClass="config" modifier="striped-tbody" />
            <div className="config__row-buttons-container">
              <button onClick={handleClose} type="button" className="config__row-buttons-container-btn-close">Cerrar</button>
              <button type="button" className="config__row-buttons-container-btn-new">Nuevo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Role : FC<Props> = (props : Props) => {
  const { openedId, id, changeOpened } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(openedId === id);
  }, [openedId, id]);

  const handleChangeOpened = () : void => {
    if (isOpen) changeOpened(null);
    else changeOpened(id);
  };
  return isOpen ? (
    <RoleOpen
      handleClose={handleChangeOpened}
    />
  ) : <RoleClosed handleOpen={handleChangeOpened} />;
};

Role.defaultProps = defaultProps;

export default Role;
