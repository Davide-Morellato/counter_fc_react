//
//
//importo il componente react & gli HOOKS useState, useEffect
import React, { useState, useEffect } from "react";

import "./card.styles.scss"; //per i fogli di stile/immagini è necessario inserire l'estensione

//importo il componente counter
import Counter from "../counter/counter.component";

//importo il componente users
import Users from "../users/users.commponent";

//importo il compoente loading
import Loading from "../loading/loading.component";

//aggiungo il componente HOC Pattern "Loading" a cui passo come parametro il componente Users
const UsersLoading = Loading(Users);

//trasformo il componente card in un Functional Component
const Card = ({ testo }) => {

  //definisco le variabili di stato
  const [users, setUsers] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  //chiamata API all'avvio del componente
  useEffect(() => {
    //metodo fetch('linkPath') per il recupero dei dati dalle API
    //è una PROMISE -> chiamata asincrona che promette di restituire un determinato esito al suo termine
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //risposta attesa in stringa, trasformata in oggetto JSON
      //valori attesi che vanno ad aggiornare lo state
      .then((values) => {
        //cambio i valori iniziali di users & loading, tramite setUsers & setLoading
        setUsers(values);
        setLoading(false);
      })
      .catch((err) => {
        //inserisco il messaggio di errore tramite setError
        setError(true);
      });
  }, []);

  useEffect(() => {
    //controllo
    //SE c'è un errore nello stato (error) -> passato tramite le variabili di stato
    //ALLORA stampa l'errore [throw Error()]
    if (error) throw Error();
  })

  return (
    <div className="card">
      <h1>
        {/* invoco l'oggetto testo */}
        {testo}
      </h1>

      {/* INSERISCO IL COMPONENTE CONTATORE */}
      <Counter />

      <br />

      {/* INSERISCO IL COMPONENTE USERS */}
      {/* passo la proprietà users nel componente  */}
      {/* <Users users={this.state.users} /> */}
      {/* Sostituisco il componente Users con il componente UsersLoading così da visualizzare prima il caricamento (loading) e successivamente gli utenti (users) */}
      <UsersLoading users={users} loading={loading} />
    </div>
  );
};

//esporto il componente Card
export default Card;
