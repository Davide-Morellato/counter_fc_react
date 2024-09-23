//
//
//importo il componente react & l'HOOK useState
import React, { useState }  from "react";

import "./card.styles.scss"; //per i fogli di stile/immagini è necessario inserire l'estensione

//importo il componente counter
import Counter from "../counter/counter.component";

//importo il componente users
import Users from "../users/users.commponent";

//importo il compoente loading
import Loading from "../loading/loading.component";


//aggiungo il componente HOC Pattern "Loading" a cui passo come parametro il componente Users
const UsersLoading = Loading(Users);


//creo il componente CARD -> Class Component
// class Card extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       users: [],
//       //inserisco la proprietà di partenza
//       //necessaria per l'HOC Pattern
//       loading: true,

//       //inserisco una nuova proprietà
//       error: false
//     };
//   }

//trasformo il componente card in un Functional Component
  class Card extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        users: [],
        //inserisco la proprietà di partenza
        //necessaria per l'HOC Pattern
        loading: true,
  
        //inserisco una nuova proprietà
        error: false
      };
    }
  //chiamata API all'avvio del componente
  componentDidMount(){
    //metodo fetch('linkPath') per il recupero dei dati dalle API
    //è una PROMISE -> chiamata asincrona che promette di restituire un determinato esito al suo termine
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //risposta attesa in stringa, trasformata in oggetto JSON
      //valori attesi che vanno ad aggiornare lo state
      .then((values) =>
        this.setState({
          users: values,
          loading: false
        })
      )
      .catch((err) => {
        //inserisco il messaggio di errore
        // throw Error();
        this.setState({
          error: true
        })
      }); 
    
  }

  render() {

    //controllo
    //SE c'è un errore nello stato
       //ALLORA stampa l'errore [throw Error()]
    if(this.state.error) throw Error();

    //recupero il valore di testo dalla props
    const {testo} = this.props;

    return (
      //aggiungo il tag FRAGMENT per aggiungere all'interno del componente altri tag
      // <React.Fragment>
      <div className="card">
        {/* SCRIVO NEL COMPONENTE */}
        <h1>
          {/* invoco il parametro props a cui associo l'attributo testo presente in App.js */}
          {/* {props.testo} */}
          {/**/}
          {/**/}
          {/* invoco l'oggetto destrutturato */}
          {testo}
        </h1>

        {/* NB -> se non fosse stato destrutturato il parametro,
                allora l'invocazione sarebbe dovuta avvenire con: {props.children}*/}
        {/* {children} */}

        {/**/}
        {/* INSERISCO IL COMPONENTE CONTATORE */}
        <Counter />

        <br />

        {/* INSERISCO IL COMPONENTE USERS */}
        {/* passo la proprietà users nel componente  */}
        {/* <Users users={this.state.users} /> */}
        {/* Sostituisco il componente Users con il componente UsersLoading così da visualizzare prima il caricamento (loading) e successivamente gli utenti (users) */}
        <UsersLoading users={this.state.users} loading={this.state.loading}/>
      </div>
      //<h1>Ciao</h1>
      //</React.Fragment>
    );
  }
}

//esporto il componente Card
export default Card;
