import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My series</h1>
        <form>
          <input type="text"/>
          <button>Search</button>
        </form>
      </header>

      <div className="sorties">
        <img src="./images/got.jpg"/>
        <img src="./images/dame.jpg"/>
        <img src="./images/mandalorian.jpg"/>
        <img src="./images/vikings.jpg"/>
        <img src="./images/umbrella.jpg"/>
      </div>
    </div>
  );
}

export default App;
