import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="header text-center">Dictionary</h1>
        < h2 className="header-2">What word do you want to look up</h2>
        <DictionarySearch></DictionarySearch>
        <footer className=" app-footer">
          <small>This project was coded by Whitney Mmaitsi</small>
        </footer>
      </div>
    </div>
  );
}
