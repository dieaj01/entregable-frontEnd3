import React from "react";
class Recordatorio extends React.Component {

    render() {
        
        const historial = this.props.historial.map((opcion, index) => (
        <li key={index}>{opcion}</li>
        ));

        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.seleccionAnterior}</h3>
                <h4>Historial de opciones elegidas: {historial}</h4>
                <ul></ul>
            </div>
        );
    }
}

export default Recordatorio;