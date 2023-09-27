import { useState } from 'react';

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
};

const Input = ({ word, setWord }: inputProps) => {
  const [definition, setDefinition] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
    <main>
      <div>
        <input
          required
          type="text"
          onChange={(e) => setDefinition(e.target.value)}
          value={definition}
          placeholder="Search for any word..."
        />
        <button disabled={isLoading} onClick={handleButtonClick}>
          Search
        </button>
      </div>
      {definition.length === 0 && isClicked && word.length === 0 && <p>Whoops!</p>}
    </main>
  );
};

export default Input;
