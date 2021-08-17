import './App.scss';
import logo from './assets/images/logo.svg'
import CalculatorCard from './components/CalculatorCard/CalculatorCard'
function App() {
  return (
    <div className="App">
      <img className="logo" src={logo}></img>
      <CalculatorCard></CalculatorCard>
    </div>
  );
}

export default App;
