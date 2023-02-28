'use client'
import { Col, Row, Typography } from 'antd';
import menuItemsLang from '@/lang/menu-items.json';
import rootStore from '@/store';
import { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from '@/styles/navbar.module.scss';
import ThemeSwitch from './themeSwitch';
import { useRouter } from 'next/navigation';
import { getAppDirection } from '@/utils/appDirection';

const Navbar: React.FC = observer(() => {
  const { uiStore, formStore } = rootStore;
  const router = useRouter();
  const appDirection = getAppDirection();

  const [current, setCurrent] = useState('home');

  const menuItems = useMemo(() => Object.entries(menuItemsLang).map(([key, value]) => ({
    label: value[uiStore.pageLanguage as keyof typeof value],
    key,
  })), [uiStore.pageLanguage]);

  const menuActions = {
    lang: () => {
      uiStore.setLanguage(uiStore.pageLanguage === 'en' ? 'he' : 'en');
      localStorage.setItem('language', uiStore.pageLanguage);
    }
  };

  const handleChangeMenu = (key: string) => {
    if (key === 'contact') {
      formStore.setContactModalOpen(true);
      return;
    }
    setCurrent(key);
    router.push(`/${key === "home" ? "" : key}`);
  };

  const langUi = {
    en: 'עברית',
    he: 'English',
  };

  const slideSidebarOnLangChange = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.transition = 'transform 0.1s ease-in-out';
      sidebar.style.transform = `translateY(-100%)`;
      setTimeout(() => {
        sidebar.style.transform = `translateY(0)`;
      }, 100);
    }
  }

  useEffect(() => {
    slideSidebarOnLangChange();
  }, [uiStore.pageLanguage]);

  useEffect(() => {
    const path = window.location.pathname;
    const pathArray = path.split('/');
    const pathKey = pathArray[pathArray.length - 1];
    setCurrent(pathKey);
  }, []);

  return (
    <Row id='sidebar' className={styles.navbar} dir={appDirection}>
      <Col className={`${styles.navbarSection} ${styles.navbarSectionRight}`}>
        {
          menuItems.map(({ label, key }) => (
            <Typography key={key} className={`${styles.menuItem} ${current === key ? styles.active : ''}`} onClick={() => handleChangeMenu(key)}>{label}</Typography>
          ))
        }
      </Col>
      <Col className={`${styles.navbarSection} ${styles.navbarSectionLeft}`}>
        <Typography className={styles.langAction} onClick={menuActions.lang}>{langUi[uiStore.pageLanguage]}</Typography>
        <ThemeSwitch />
      </Col>
    </Row>
  );
});

export default Navbar;