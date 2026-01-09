export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              {synonym}
              {index < props.synonyms.length - 1 ? ", " : ""}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
