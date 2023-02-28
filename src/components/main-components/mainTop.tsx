import { Row, Typography } from "antd"
import styles from '@/styles/home.module.scss'
import { getAppDirection } from '@/utils/appDirection'
import TextSlideHook from "@/hooks/textSlideHook"
import homePageDictionary from "@/lang/main-page.json"
import rootStore from "@/store"
import { observer } from "mobx-react-lite"

const MainTop = observer(() => {
  const { uiStore } = rootStore;
  const appDirection = getAppDirection();
  TextSlideHook('sliding-sub-header');
  return (
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
  )
});

export default MainTop