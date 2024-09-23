import React from "react";
import SingleUser from "../singleUser/singleUser.component";

import "./users.styles.scss";

//trasformo il componente Users in un Functional Component
//a cui passo come parametro la proprietà users che riceverà dal componente Card
const Users = ({ users }) => {
  // render(){
  //verifico che la chiamata sia andata a buon fine
  // console.log(this.state.users);

  return (
    <div className="users">
      {/* rendering condizionale con operatore ternario per ciclare l'oggetto */}
      {/* SE la lunghezza (length) delle chiavi (keys) dell'oggetto della chiamata (Object), quindi nell'oggetto state.users è diverso da 0,
                    ALLORA (?) mappiamo l'oggetto users per ciclarne i valori
                    ALTRIMENTI (:) null (non stampare nulla) */}
      {/* {Object.keys(users).length !== 0
        ? users.map((value) => (
            //ottimizzo il codice
            //creo un componente in cui identifico id e name,
            //da passare come props , ponendo come chiave di lettura (key) l'id di riferimento
            <SingleUser id={value.id} name={value.name} key={value.id} />
          ))
        : null} */}

        {/* Rimuovo il rendering condizionale, lasciando solo la mappatura per la stampa dei valori */}
      {
        users.map((value) => (
            <SingleUser id={value.id} name={value.name} key={value.id} />
        ))
      }

    </div>
  );
  // }
};

export default Users;
