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
    message?: string;
  }[];
};

const Meaning = ({ word }: meaningProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>{word.message}</div>
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
            <p className={styles.reference_section}>
              <span className={styles.source}>Source:</span>{' '}
              <a href={word[0].sourceUrls[0]} className={styles.reference}>
                {word[0].sourceUrls[0]}{' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <path
                    fill="none"
                    stroke="#838383"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                  />
                </svg>
              </a>
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Meaning;
