//importo React & gli HOOKS useState, useEffect
import React, { useState, useEffect, useCallback, useLayoutEffect, useMemo } from "react";
import New from "../new/new.component";
import "./counter.styles.scss";

//creo il componente che estende il componente base dalla libreria React
// class Counter extends React.Component {
//   //metodo constructor con il parametro props
//   constructor(props) {
//     //metodo super per passare il parametro props al componente che sto estendendo: React.Component
//     super(props);
//
//     //
//     //MODO 1 -> invoco la funzione Increase per legarla all'evento onClick
//     // this.IncreaseNumber = this.IncreaseNumber.bind(this)
//
//     //definisco lo stato come oggetto di Js, utilizzando this per accedere alle props
//     this.state = {
//       //dichiaro una proprietà iniziale
//       // number: 0,
//
//       //dichiaro una proprietà come oggetto
//       number: {
//         value: 0,
//         otherProperty: 'ciao'
//       },
//
//       test: {
//         othersProperty: 'hello'
//       }
//     };
//   }


//
//
//tenendo fuori questa funzione, verrà eseguita una sola volta e non ogni volta che refresho il componente
const getVal = () => {
  for(let i = 0; i < 1000000000; i++){ }

  //constrollo in console quando viene invocata la funzione
  console.log('getVal')

  return [1, 2, 3, 4, 5]
}

const Counter = () => {

  //dichiaro una varaibile per la useCallback
  // const getVal = useCallback(() => {
  //   for(let i = 0; i < 1000000000; i++){ }

  //   return [1, 2, 3, 4, 5]
  // }, [])

  //dihiaro una variabile che invochi la funzione getVal()
  const passValues = useMemo (() => getVal(), [])

  //creo un variabile che restituisce un array (destrutturazione) per modificare lo state, in base al suo valore di partenza da noi impostato: setState(0)
  const [count, setCount] = useState(0);

  //
  //dichiaro una funzione per l'evento onClick di Increase
  const IncreaseNumber = () => {
    //imposto la modifica dello state, invocando il metodo setCount
    //che tramite una callback mi permette di accedere al valore iniziale di count e incrementarlo
    setCount((count) => count + 1);
  };

  //dichiaro una funzione per l'evento onClick di Decrease
  const DecreaseNumber = () => {
    //
    //controllo
    //SE count > 0
    //ALLORA imposto il decremento aggiornando la proprietà setCount
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  //dichiaro una classe come oggetto da passare per lo stile in linea
  const box = {
    color: "#000000",
    backgroundColor: "#FFFFFF",
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "center",
    marginTop: "15px",
    padding: "0px 10px",
    borderRadius: "15px",
  };

  //dichiaro la funzione useEffect come fosse componentDidMount()
  useEffect(() => {
    console.log('Primo Render')
  }, [])

  //dichiaro la funzione useEffect, definendo in base a quale valore aggiornarsi ", [count]" -> componentDidUpdate()
  useEffect(() => {
    console.log('aggiornato: ' + count)
  }, [count])

  //dichiaro la funzione useEffect, come fosse componentWillUnmount()
  // useEffect(() => {

  //   //restituisco una funzione callback
  //   return () => {
  //     console.log('SMONTATO')
  //   }
  // })

  //dichiaro la funzione useLayoutEffect() -> interviene prima che la pagina venga aggiornata
  useLayoutEffect(() => {
    console.log('Pre-Aggiornamento: ' + count)
  }, [count])


  return (
    <div className="counter">

      {/* importo il NewComponent e dichiaro che la props getValues deve corrispondere a passValue per leggere i valori ottenuti da getVal*/}
      <New getValues={passValues} />

      {/* rendo condizionale la classe */}
      <div className={`number_counter ${count >= 5 ? "red" : null}`}>
        {/* aggiungo la proprietà dello state */}
        {count}
      </div>

      {/* aggiungo un messaggio arrivati ad un determinato valore */}
      {/* passandogli come stile in linea l'oggetto dichiarato prima di render */}
      {count >= 5 ? (
        <div style={box}>
          <p>Ottimo! Sei a {count}!</p>
        </div>
      ) : null}
      <div className="wrapper_buttons">
        {/* aggiungo l'evento onClick per decrementare il valore di number */}
        {/* invoco la funzione nell'evento tramite un'arrow function */}
        <button
          type="submit"
          onClick={DecreaseNumber}
          className="button_counter"
        >
          Decrease
        </button>

        {/* aggiungo l'evento onClick per incrementare il valore di number */}
        <button
          type="submit"
          onClick={IncreaseNumber}
          className="button_counter"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

//esporto il componente Counter
export default Counter;
