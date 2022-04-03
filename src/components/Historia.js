import React from 'react';
import Opciones from './Opciones';
import Recordatorio from './Recordatorio';
import data from './data.json';

class Historia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          historial: [],
          anterior: '',
          actual: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.actual !== this.state.actual) {
          this.state.historial.push(this.state.anterior);
        }
    }
    
    
    handleSelectOpcion = (e) => {
        const id = e.target.id;
        console.log(id);
        if(this.state.actual >= 7){
            alert('No hay más historias,vuelves al inicio de la Historia');
            this.setState({
                anterior: '',
                actual: 0,
                historial: []
            });
        }
        else if((id === 'A' && this.state.anterior === 'A') ||
                (id === 'B' && this.state.anterior === 'B') ||
                (id === 'B')){
            this.setState({
                anterior: id,
                actual: this.state.actual + 2
            });
        }
        else if(id === 'A' && this.state.anterior !== 'A'){
            this.setState({
                anterior: id,
                actual: this.state.actual + 1
            });
        }
        else if(id === 'B' && this.state.anterior === 'A'){
            this.setState({
                anterior: id,
                actual: this.state.actual + 3
            });
        }
    };

    render(){
        return(
            <div className="layout">
                <h1 className="historia">{data[this.state.actual].historia}</h1>
                <Opciones opciones={data[this.state.actual].opciones} handleSelectOpcion={this.handleSelectOpcion}/>
                <Recordatorio seleccionAnterior={this.state.anterior} historial={this.state.historial}/>
            </div>
        );
    }
}

export default Historia;
