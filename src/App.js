import logo from "./logo.svg";
import "./App.css";
import { Movies } from "./components/Movies";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div>
          <h1>WOOKIE</h1>
          <h1>MOVIES</h1>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>

      <Movies />
    </div>
  );
}

export default App;
