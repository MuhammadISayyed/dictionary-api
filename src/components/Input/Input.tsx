import { useState } from 'react';
import styles from './Input.module.css';

type inputProps = {
  word: object[];
  setWord: React.Dispatch<
    React.SetStateAction<
      {
        word: string;
        phonetic: string;
        phonetics: [
          {
            audio: string;
            text: string;
          }
        ];
        meanings: [
          {
            partOfSpeech: string;
            definitions: [
              {
                definition: string;
              }
            ];
            synonyms: string[];
            antonyms: string[];
          }
        ];
        sourceUrls: string[];
      }[]
    >
  >;
  theme: string;
};

const Input = ({ word, setWord, theme }: inputProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [definition, setDefinition] = useState('');

  const handleButtonClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsClicked(true);
    if (definition.length === 0) {
      setWord([]);
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${definition}`);
      const data = await response.json();
      setWord(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setDefinition('');
      setIsClicked(false);
    }
  };

  return (
    <div className={styles.input_section}>
      <div
        className={`${styles.container} ${
          theme === 'dark' ? styles.container_dark : styles.container_light
        }`}
      >
        <form action="submit" className={styles.form}>
          <input
            className={`${styles.input} ${
              theme === 'dark' ? styles.input_dark : styles.input_light
            }`}
            required
            type="text"
            onChange={(e) => setDefinition(e.target.value)}
            value={definition}
            placeholder="Search for any word..."
          />
          <button className={styles.search} disabled={isLoading} onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path
                fill="none"
                stroke="#A445ED"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
              />
            </svg>
          </button>
        </form>
      </div>
      {definition.length === 0 && isClicked && word.length === 0 && (
        <p className={styles.empty}>Whoops, can't be empty...</p>
      )}
    </div>
  );
};

export default Input;
