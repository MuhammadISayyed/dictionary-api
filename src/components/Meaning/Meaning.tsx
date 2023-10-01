import styles from './Meaning.module.css';

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
    <div className={styles.container}>
      <main>
        {word.length > 0 && (
          <div>
            {word.map((def, index) => (
              <div key={index}>
                {def.meanings.map((wordMeaning, index) => (
                  <div key={index}>
                    <div>
                      <div className={styles.speech_container}>
                        <span className={styles.speech_part}>{wordMeaning.partOfSpeech}</span>
                        <span>
                          <hr className={styles.inline_line} />
                        </span>
                      </div>
                      <p className={styles.meaning}>Meaning</p>
                      <div>
                        {wordMeaning.definitions.map((singleDef, index) => (
                          <ul key={index}>
                            <li className={styles.definition}>{singleDef.definition}</li>
                          </ul>
                        ))}
                      </div>
                      <div className={styles.alternatives}>
                        {wordMeaning.synonyms.length > 0 ? (
                          <div className={styles.synonym_container}>
                            <p className={styles.synonyms}>Synonyms</p>
                            <span>
                              {wordMeaning.synonyms.map((synonym, index) => (
                                <span className={styles.alternative} key={index}>
                                  <span> {synonym}</span>
                                  <span className={styles.dot}>.</span>{' '}
                                </span>
                              ))}
                            </span>
                          </div>
                        ) : undefined}

                        {wordMeaning.antonyms.length > 0 ? (
                          <div className={styles.synonym_container}>
                            <p className={styles.synonyms}>Antonyms</p>
                            <span>
                              {wordMeaning.antonyms.map((antonym, index) => (
                                <span className={styles.alternative} key={index}>
                                  {antonym}
                                  <span className={styles.dot}>.</span>{' '}
                                </span>
                              ))}
                            </span>
                          </div>
                        ) : undefined}
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            ))}
            <p>
              Source: <a href={word[0].sourceUrls[0]}>{word[0].sourceUrls[0]}</a>
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Meaning;
