import './App.css';
import Table from './components/Table/Table';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Table data={data}/>
      <div className="attribution">Mock data generated with <a href="https://www.mockaroo.com">Mockaroo</a>.</div>
    </div>
  );
}

export default App;
