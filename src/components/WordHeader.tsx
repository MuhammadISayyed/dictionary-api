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

  return <div>{word.length > 1 && <button onClick={play}>Play</button>}</div>;
};

export default WordHeader;
