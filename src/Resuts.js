import React from "react";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <p className="phonetic">{props.results.phonetic}</p>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>
                <strong>Definition: </strong>
                {meaning.definition}
                <br />
                <em>{meaning.example}</em>
              </p>
              <p>
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
