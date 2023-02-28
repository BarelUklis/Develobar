import styles from '@/styles/home.module.scss'
import { observer } from 'mobx-react-lite'
import { Row, Typography } from 'antd'
import homePageDictionary from '@/lang/main-page.json'
import rootStore from '@/store'
import { useEffect } from 'react'
import { getAppDirection } from '@/utils/appDirection'

const Home = observer(() => {

  const { uiStore } = rootStore;
  const appDirection = getAppDirection();

  useEffect(() => {
    const slideSubHeader = () => {
      const subHeader = document.getElementById('sliding-sub-header');
      if (subHeader) {
        //scroll
        subHeader.style.paddingLeft = appDirection === "ltr" ? window.scrollY * 1.3 + "px" : '0';
        subHeader.style.paddingRight = appDirection === "rtl" ? window.scrollY * 1.3 + "px" : '0';
        // fade 
        subHeader.style.opacity = (1 - (window.scrollY / 600)).toString();
      }
    }

    window.addEventListener('scroll', slideSubHeader);
    return () => window.removeEventListener('scroll', slideSubHeader);
  }, [appDirection]);

  return (
    <>
      <main data-dir={appDirection} className={styles.main}>
        <div  className={`${styles.mainTop} ${styles.mainScreen} ${styles.mainAnimation}`}>
          <Row className={styles.mainTopTRow}>
            <Typography.Title id='header'>{homePageDictionary.header[uiStore.pageLanguage]}</Typography.Title>
          </Row>
          <Row className={styles.mainTopBRow}>
            <Typography.Title id='sliding-sub-header' level={2}>{
              homePageDictionary.subHeader[uiStore.pageLanguage].split(',').map((item, index) => {
                return <span key={index} style={{
                  marginLeft: appDirection === "ltr" ? `${index * 5}rem` : 0,
                  marginRight: appDirection === "rtl" ? `${index * 9}rem` : 0,
                  lineHeight: '1.5',
                }}>{item}<br /></span>
              })
            }</Typography.Title>
          </Row>
        </div>
        <div className={`${styles.mainMid} ${styles.mainScreen}`}>
        </div>
      </main>
    </>
  )
});

export default Home