import { motion } from 'framer-motion';
import { useState } from 'react';
import SelectFont from './SelectFont';
import styles from './AppHeader.module.css';

type AppHeaderProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const AppHeader = ({ setTheme }: AppHeaderProps) => {
  const [isOn, setIsOn] = useState(false);
  const root = document.documentElement;
  const getStoredTheme = localStorage.getItem('colorTheme');

  const toggleVariants = {
    toggled: {
      x: 7,
    },

    notToggled: {
      x: 0,
    },
  };

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
    setIsOn(!isOn);
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
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38">
        <g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
          <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
          <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
          <path d="M11 9h12" />
          <path strokeLinecap="round" d="M 10, 15 L 40, 15" />
        </g>
      </svg>
      <div className={styles.toggles}>
        <SelectFont />
        <button onClick={handleToggle} className={styles.toggle_btn}>
          <svg
            className={styles.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(274, 82%, 60%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
            <motion.circle
              variants={toggleVariants}
              animate={isOn ? 'toggled' : 'notToggled'}
              cx="8"
              cy="12"
              r="3"
            ></motion.circle>
          </svg>
        </button>
        <svg
          className={styles.moon}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke={`${isOn ? 'hsl(274, 82%, 60%)' : '#838383'}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AppHeader;
