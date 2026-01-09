import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import Results from "./Resuts";

export default function DictionarySearch() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // API Call should happen here when you press ENTER
    let apiKey = "23e2742eef1f1bc7tod430e337aaf4bd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
        />
      </form>
      <Results results={results} />
    </div>
  );
}
