type AppHeaderProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const AppHeader = ({ setTheme }: AppHeaderProps) => {
  const root = document.documentElement;
  const getStoredTheme = localStorage.getItem('colorTheme');

  if (getStoredTheme === 'light') {
    setTheme('light');
    root.classList.remove('dark');
    root.classList.add('light');
  } else if (getStoredTheme === 'dark') {
    setTheme('dark');
    root.classList.remove('light');
    root.classList.add('dark');
  }

  const handleToggle = () => {
    if (root.classList.contains('light')) {
      localStorage.setItem('colorTheme', 'dark');
      setTheme('dark');
      root.classList.remove('light');
      root.classList.add('dark');
    } else if (root.classList.contains('dark')) {
      localStorage.setItem('colorTheme', 'light');
      setTheme('light');
      root.classList.remove('dark');
      root.classList.add('light');
    }
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default AppHeader;
