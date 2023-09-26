import { useState } from 'react';

const Input = () => {
  const [definition, setDefinition] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${definition}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setDefinition('');
    }
  };

  return (
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
      {/* <div>{word.word}</div> */}
    </div>
  );
};

export default Input;
