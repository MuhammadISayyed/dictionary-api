import { useState } from 'react';
import Meaning from './Meaning';

const Input = () => {
  const [definition, setDefinition] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [word, setWord] = useState<
    {
      word: string;
      phonetic: string;
      phonetics: [{ audio: string; text: string }];
      meanings: [
        {
          partOfSpeech: string;
          definitions: [definition: string | Array<string>];
          synonyms: Array<string> | undefined;
          antonym: Array<string> | undefined;
        }
      ];
      sourceUrls: string[];
    }[]
  >([]);

  const handleButtonClick = async (e) => {
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

  // GET BACK TO THIS LATER
  // WHEN WORKING ON THE WORD HEADER SECTION
  // function play() {
  //   new Audio(word[0].phonetics[0].audio).play();
  // }

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
      <Meaning word={word} />
    </main>
  );
};

export default Input;
