type meaningProps = {
  word: {
    word: string;
    phonetic: string;
    meanings: [
      {
        partOfSpeech: string;
        definitions: [{ definition: string }];
        synonyms: string[];
        antonyms: string[];
      }
    ];
    sourceUrls: string[];
  }[];
};

const Meaning = ({ word }: meaningProps) => {
  return (
    <main>
      {word.length > 0 && (
        <div>
          {word.map((def, index) => (
            <div key={index}>
              {/* <p>{def.word}</p>
          <p>{def.phonetic}</p> */}
              {def.meanings.map((wordMeaning, index) => (
                <div key={index}>
                  <div>
                    <p>{wordMeaning.partOfSpeech}</p>
                    <p>Meaning</p>
                    <div>
                      {wordMeaning.definitions.map((singleDef, index) => (
                        <ul key={index}>
                          <li>{singleDef.definition}</li>
                        </ul>
                      ))}
                    </div>
                    <p>Synonyms</p>
                    <p>
                      {wordMeaning.synonyms.map((synonym, index) => (
                        <span key={index}>{synonym} </span>
                      ))}
                    </p>
                    <p>Antonyms</p>
                    <p>
                      {wordMeaning.antonyms.map((antonym, index) => (
                        <span key={index}>{antonym}. </span>
                      ))}
                    </p>
                  </div>
                  <br />
                </div>
              ))}
            </div>
          ))}
          <p>{word[0].sourceUrls[0]}</p>
        </div>
      )}
    </main>
  );
};

export default Meaning;
