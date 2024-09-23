import React from "react";

import "./singleUser.styles.scss";

//creo il componente a cui passo tramite destrutturazione i parametri di riferimento
//(vengono presi dal componente Users che possiede la chiamata API e ne restituisce i valori)
const SingleUser = ({ id, name }) => {
  return (
    <div className="single_user">
      {/* stampo il valore id dell'oggetto */}
      <span>{id}</span>

      {/* stampo il valore name dell'oggetto */}
      <span>Name: {name}</span>
    </div>
  );
};

export default SingleUser;
