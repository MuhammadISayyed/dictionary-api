import styles from './WordHeader.module.css';

type wordHeaderProps = {
  word: {
    word: string;
    phonetic: string;
    phonetics: { audio: string }[];
  }[];
};

const WordHeader = ({ word }: wordHeaderProps) => {
  function play() {
    if (word[0].phonetics[0].audio.length > 1) {
      return new Audio(word[0].phonetics[0].audio).play();
    } else if (word[0].phonetics[1].audio.length > 1) {
      return new Audio(word[0].phonetics[1].audio).play();
    } else if (word[0].phonetics[2].audio.length > 1) {
      return new Audio(word[0].phonetics[2].audio).play();
    } else {
      return undefined;
    }
  }

  return (
    <div className={styles.header_container}>
      {word.length > 0 && (
        <div className={styles.container}>
          <div>
            <p className={styles.word}>{word[0].word}</p>
            <p className={styles.pronunciation}>{word[0].phonetic}</p>
          </div>
          {
            <button className={styles.button} onClick={play}>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
                <g fill="#A445ED" fillRule="evenodd">
                  <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                  <path d="M29 27v21l21-10.5z" />
                </g>
              </svg>
            </button>
          }
        </div>
      )}
    </div>
  );
};

export default WordHeader;
