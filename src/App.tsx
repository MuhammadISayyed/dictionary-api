import styles from './App.module.css';
import Input from './components/Input/Input';
import { useState } from 'react';
import Meaning from './components/Meaning/Meaning';
import WordHeader from './components/WordHeader/WordHeader';
import AppHeader from './components/AppHeader/AppHeader';

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
      message?: string;
    }[]
  >([]);

  const [theme, setTheme] = useState('light');

  return (
    <div className={`${styles.app}`}>
      <div className={styles.container}>
        <AppHeader setTheme={setTheme} theme={theme} />
        <Input theme={theme} word={word} setWord={setWord} />
        <WordHeader word={word} />
        <Meaning word={word} />
      </div>
    </div>
  );
}

export default App;
