import { useState } from 'react';

type inputProps = {
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

const Input = ({ setWord }: inputProps) => {
  const [definition, setDefinition] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
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
    </main>
  );
};

export default Input;
