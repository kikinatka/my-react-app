import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Первый проект React </h1>
       <div> 
        <form>
            <label>
               <input type="text" name="name" />
            </label>
                <input type="submit" value="Отправить" />
        </form>
        
        </div>
      </header>
    </div>
  );
}

export default App;
