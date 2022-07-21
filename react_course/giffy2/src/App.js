import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from 'wouter'
import SearchBar from './components/SearchBar';


function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <h1 className='title'>Giffy</h1>
        <SearchBar></SearchBar>
        <Route path='/gif/:keyword' component={ListOfGifs}/>
      </section>
    </div>
  );
}

export default App;
