import { FC } from "react";

const HomeConfiguracion : FC = () => (
    <>
        <div className="config-container">
            <div className="config__title-container">
                <h2 className="config__title">Configuración general de la cuenta</h2>
            </div>
            <div className="config-content">
                <div className="config__row">
                    <span className="config__row-head">Rol</span>
                    <div className="config__row-body">Apoderado: <span className="config__row-slim">Padre</span></div>
                    <button className="config__row-option">Ver</button>
                </div>
                <div className="config__row">
                    <span className="config__row-head">Número de DNI</span>
                    <span className="config__row-body">76519090</span>
                </div>
                <div className="config__row">
                    <span className="config__row-head">Nombres</span>
                    <span className="config__row-body">Axel Jenner</span>
                </div>
                <div className="config__row">
                    <span className="config__row-head">Apellidos</span>
                    <span className="config__row-body">Juárez Ávila</span>
                </div>
                <div className="config__row">
                    <span className="config__row-head">Contacto</span>
                    <div className="config__row-body"><span className="config__row-slim">Principal: </span>+51933153250</div>
                    <button className="config__row-option">Editar</button>
                </div>
            </div>
        </div>
    </>
);

export default HomeConfiguracion;