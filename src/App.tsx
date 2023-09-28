import styles from './App.module.css';
import Input from './components/Input/Input';
import { useState } from 'react';
import Meaning from './components/Meaning';
import WordHeader from './components/WordHeader';

function App() {
  const [word, setWord] = useState<
    {
      word: string;
      phonetic: string;
      phonetics: [{ audio: string; text: string }];
      meanings: [
        {
          partOfSpeech: string;
          definitions: [{ definition: string }];
          synonyms: string[];
          antonyms: string[];
        }
      ];
      sourceUrls: string[];
    }[]
  >([]);
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Input word={word} setWord={setWord} />
        <WordHeader word={word} />
        <Meaning word={word} />
      </div>
    </div>
  );
}

export default App;
