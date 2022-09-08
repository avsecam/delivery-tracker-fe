import './App.css';
import Table from './components/Table/Table';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Table data={data}/>
    </div>
  );
}

export default App;
