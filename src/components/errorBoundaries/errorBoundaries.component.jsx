import React from "react";

import './errorBoundaries.styles.scss';

//class component per la gestione degli errori
class ErrorBoundaries extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            hasError: false,
        }
    }

    //metodo statico per cambiare lo stato dell'errore
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    //metodo per intercettare gli errori
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo)
    }

    render(){
        //controllo
        //SE esiste (quindi c'è) un errore (this.state.hasError)
            //ALLORA stampa il messaggio di errore
        if(this.state.hasError){
            return <h1>Errore di Sistema</h1>
        }

        //restituisci tutto ciò che verrà inserito al tuo interno
        //perchè questo componente andrà a racchiudere l'applicazione
        return this.props.children;
    }
}

export default ErrorBoundaries;