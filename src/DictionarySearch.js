import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import Results from "./Resuts";
import Photos from "./Photos";

export default function DictionarySearch() {
  let [keyWord, setKeyWord] = useState("Sunrise");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "23e2742eef1f1bc7tod430e337aaf4bd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    // 2. Pexels API Call
    let pexelsApiKey =
      "nZVwOUePBhSXVxggthrPgDMwgetCDL0gayy5Xke1MptbxdvjHrL6J1rA";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let headers = { Authorization: pexelsApiKey };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            defaultValue={keyWord}
            className="search"
          />
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
