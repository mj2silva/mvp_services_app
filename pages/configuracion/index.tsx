import { FC, ReactNode, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toggle from "../../components/Dropdown/Toggle";
import { faPencilAlt, faComments } from '@fortawesome/free-solid-svg-icons';

type Props = {

    children: ReactNode,
    onClick: () => void,
    openedId: number,
    id: number,
}

const HomeConfiguracion : FC<Props> = (props : Props) => {
    const { children, onClick, openedId, id} = props;
    const [isOpen, setIsOpen] = useState(false);
            useEffect(() => {
                setIsOpen(openedId === id);
            }, [openedId, id]);
    return(
        <>
            <div className="config-container">
                <div className="config__title-container">
                    <h2 className="config__title">Configuración general de la cuenta</h2>
                </div>
                <div className="config-content">
                    <div className="config__row">
                        <button className="config__row-container">
                            <span className="config__row-container-head">Rol</span>
                            <div className="config__row-container-body">Apoderado: <span className="config__row-container-slim">Padre</span>
                                <div className={`config__row-container-action--${(isOpen) ? 'visible' : 'hidden'}`}>
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
                            <div className="config__row-container-option">Ver</div>
                        </button>
                    </div>
                    <hr className="config-line"></hr>
                    <div className="config__row">   
                        <button className="config__row-container">
                            <span className="config__row-container-head">Número de DNI</span>
                            <span className="config__row-container-body">76519090</span>
                        </button>
                    </div>
                    <hr className="config-line"></hr>
                    <div className="config__row">
                        <button className="config__row-container">
                            <span className="config__row-container-head">Nombres</span>
                            <span className="config__row-container-body">Axel Jenner</span>
                        </button>
                    </div>
                    <hr className="config-line"></hr>
                    <div className="config__row">
                        <button className="config__row-container">
                            <span className="config__row-container-head">Apellidos</span>
                            <span className="config__row-container-body">Juárez Ávila</span>
                        </button>
                    </div>
                    <hr className="config-line"></hr>
                    
                    <div className="config__row">
                        <button className="config__row-container">
                            <span className="config__row-container-head">Contacto</span>
                            <div className="config__row-container-body"><span className="config__row-container-slim">Principal: </span>+51933153250
                                <div className={`config__row-container-action--${(isOpen) ? 'visible' : 'hidden'}`}>
                                    <div className="contact">
                                        <div className="contact__title">
                                            <span className="">Nos contactaremos contigo a través de:</span>
                                        </div>
                                        <div className="contact__body">
                                            <div className="contact__body-container">
                                                <div className="contact__body-container-row">
                                                    <span className="">WhatsApp: </span>
                                                    <span className="">+51 933153250</span>
                                                    <span className=""> Principal</span>
                                                </div>
                                                <div className="contact__body-container-row">
                                                    <span className="">Email: </span>
                                                    <span className="">axeljenner@hotmail.com</span>
                                                    <span className=""> Elegir como principal</span>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <div className="config__row-buttons-container">
                                        <button type="button" className="">Cerrar</button>
                                        <button type="button" className="">Aceptar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="config__row-container-option"><FontAwesomeIcon icon={faPencilAlt} className="config__row-container-option-icon" />Editar</div>
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default HomeConfiguracion;