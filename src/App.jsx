import './App.css';
import SelectLanguage from 'components/SelectLanguage';
import NumberFormatter from 'components/NumberFormatter';

function App() {
  return (
    <div className="App-wrapper">
      <SelectLanguage />
      <NumberFormatter />
    </div>
  );
}

export default App;
