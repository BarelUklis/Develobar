import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import moonIcon from "../../../public/theme-icons/moon.svg";
import sunIcon from "../../../public/theme-icons/sun.svg";
import Image from 'next/image';
import styles from '@/styles/themeSwitch.module.scss';
import { observer } from 'mobx-react-lite';
import rootStore from '@/store';

const ThemeSwitch = observer(() => {

  const { theme, setTheme } = useTheme();

  const { uiStore } = rootStore;

  const themeAction = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div
        className={styles.themeSwitch}
        onClick={() => themeAction()}
        style={{ flexDirection: uiStore.pageDirection[uiStore.pageLanguage] === "ltr" ? "row-reverse" : "row"}}
      >
        <div
          className={`${styles.switch} ${theme === 'dark' ? styles.switchDark : styles.switchLight
            }`}
        >
          {theme === 'light' ? (
            <Image className={styles.switchIcon} src={sunIcon} width={20} height={20} alt={'light theme'} />
          ) : (
            <Image className={styles.switchIcon} src={moonIcon} width={20} height={20} alt={'dark theme'} />
          )}
        </div>
      </div>
    </>
  );
});

export default ThemeSwitch;