import { FC, ReactNode, useEffect, useState } from "react";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Toggle from "../../components/Dropdown/Toggle";


type Props = {
    iconToggle: IconProp,
    children: ReactNode,
    onClick: () => void,
    openedId: number,
    id: number,
}

const HomeConfiguracion : FC<Props> = (props : Props) => {
    const { iconToggle, children, onClick, openedId, id} = props;
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
                        <div className="config__row-container">
                            <span className="config__row-container-head">Rol</span>
                            <div className="config__row-container-body">Apoderado: <span className="config__row-container-slim">Padre</span></div>
                            <button className="config__row-container-option">Ver</button>
                        </div>
                    </div>
                    <hr className="config-line"></hr>
                    <div className="config__row">   
                        <div className="config__row-container">
                            <span className="config__row-container-head">Número de DNI</span>
                            <span className="config__row-container-body">76519090</span>
                        </div>
                    </div>
                    <hr className="config-line"></hr>
                    <div className="config__row">
                        <div className="config__row-container">
                            <span className="config__row-container-head">Nombres</span>
                            <span className="config__row-container-body">Axel Jenner</span>
                        </div>
                    </div>
                    <hr className="config-line"></hr>
                    <div className="config__row">
                        <div className="config__row-container">
                            <span className="config__row-container-head">Apellidos</span>
                            <span className="config__row-container-body">Juárez Ávila</span>
                        </div>
                    </div>
                    <hr className="config-line"></hr>
                    
                    <div className="config__row">
                        <div className="config__row-container">
                            <span className="config__row-container-head">Contacto</span>
                            <div className="config__row-container-body"><span className="config__row-container-slim">Principal: </span>+51933153250</div>
                            <button className="config__row-container-option"  onClick={onClick}><h1 className="config__row-container-option-icon">45</h1>Editar</button>
                            <div className={`config__row-container-edit--${(isOpen) ? 'visible' : 'hidden'}`}>{children}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default HomeConfiguracion;