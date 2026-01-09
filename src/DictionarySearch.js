import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    console.log(`searching for ${keyWord}`);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);

    let apiKey = "23e2742eef1f1bc7tod430e337aaf4bd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
