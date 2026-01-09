import React from "react";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="word">{props.results.word}</h2>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <div className="phonetics">
                <Phonetics Phonetics={props.results.phonetic} />
              </div>
              <h3 className="speech">{meaning.partOfSpeech}</h3>
              <p>
                <strong>Definition: </strong>
                {meaning.definition}
                <br />
                <em className="example">{meaning.example}</em>
              </p>
              <p className="Synonyms">
                <Synonyms synonyms={meaning.synonyms} />
              </p>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
