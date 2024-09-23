import React from "react";

import "./loading.styles.scss";

//Componenete principale a cui
//aggiungo un comoponente come parametro della funzione "WrappedComponent"
const Loading = (WrappedComponent) => {

    //aggiungo un altro componente "Loader"
    const Loader = ({loading, ...otherProps}) => {
    
    //rendering condizionale 
    //SE loading === true
        //ALLORA stampa il div
    //ALTRIMENTI stampa il WrappedComponent con le altre props
    return loading ? (
        <div className="loading">
        </div>
    ) : <WrappedComponent {...otherProps}/>;
    }

    //restituisco il componente figlio
    return Loader
};

export default Loading;
