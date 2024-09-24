
import "./App.css";
import Card from "./components/card/card.component"; //importo il componente Card
import ErrorBoundaries from "./components/errorBoundaries/errorBoundaries.component"; //importo il componente Error

function App() {

  return (
    <div className="App">
      {/* Inserisco il componente ErrorBoundaries che racchiuderà il componente Card */}
      <ErrorBoundaries>
        {/* inserisco il componente Card */}
        {/* aggiungo l'attributo testo con una stringa e poi nel componente lo invoco per essere stampato in pagina */}
        <Card testo="Contatore" />

      </ErrorBoundaries>
    </div>
  );
}

export default App;
