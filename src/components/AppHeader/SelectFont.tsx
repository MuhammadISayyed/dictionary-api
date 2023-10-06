import * as Select from '@radix-ui/react-select';
import { useState } from 'react';
import styles from './AppHeader.module.css';

type selectProps = {
  theme: string;
};

const SelectFont = ({ theme }: selectProps) => {
  const [value, setValue] = useState('serif');
  const root = document.body;

  if (value === 'serif') {
    root.classList.remove('sans', 'mono');
    root.classList.add('serif');
  } else if (value === 'sans') {
    root.classList.remove('serif', 'mono');
    root.classList.add('sans');
  } else if (value === 'mono') {
    root.classList.remove('sans', 'serif');
    root.classList.add('mono');
  }

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger
        className={`${styles.select_btn} ${
          theme === 'dark' ? styles.select_btn_dark : styles.select_btn_light
        }`}
      >
        <Select.Value />
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
          <path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6" />
        </svg>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={`${styles.select_area} ${
            theme === 'dark' ? styles.select_area_dark : styles.select_area_light
          }`}
        >
          <Select.Viewport>
            <Select.Item value="serif" className={styles.item}>
              <Select.ItemText>serif</Select.ItemText>
            </Select.Item>
            <Select.Item value="sans" className={styles.item}>
              <Select.ItemText>sans</Select.ItemText>
            </Select.Item>
            <Select.Item value="mono" className={styles.item}>
              <Select.ItemText>mono</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectFont;
