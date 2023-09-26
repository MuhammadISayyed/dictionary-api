const Meaning = ({ word }) => {
  return (
    <main>
      {word.length > 0 &&
        word.map((def) => (
          <div>
            {/* <p>{def.word}</p>
          <p>{def.phonetic}</p> */}
            {def.meanings.map((wordMeaning) => (
              <div>
                <div>
                  <p>{wordMeaning.partOfSpeech}</p>
                  <p>Meaning</p>
                  <p>
                    {wordMeaning.definitions.map((singleDef) => (
                      <ul>
                        <li>{singleDef.definition}</li>
                      </ul>
                    ))}
                  </p>
                  <p>Synonyms</p>
                  <p>
                    {wordMeaning.synonyms.map((synonym) => (
                      <span>{synonym} </span>
                    ))}
                  </p>
                  <p>Antonyms</p>
                  <p>
                    {wordMeaning.antonyms.map((antonym) => (
                      <span>{antonym}. </span>
                    ))}
                  </p>
                </div>
                <br />
              </div>
            ))}
          </div>
        ))}
      <p>{word.length > 0 && word[0].sourceUrls[0]}</p>
    </main>
  );
};

export default Meaning;
