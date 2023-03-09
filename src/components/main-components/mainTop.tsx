import { Row, Typography } from "antd"
import styles from '@/styles/home.module.scss'
import { getAppDirection } from '@/utils/appDirection'
import TextSlideHook from "@/hooks/textSlideHook"
import homePageDictionary from "@/lang/main-page.json"
import rootStore from "@/store"
import { observer } from "mobx-react-lite"
import Image from "next/image"
import logoDark from '../../../public/Develobar-Logo-Dark.png'
import logoLight from '../../../public/Develobar-Logo-Light.png'
import { useTheme } from "next-themes"

const MainTop = observer(() => {
  const { uiStore } = rootStore;
  const { theme } = useTheme();
  const appDirection = getAppDirection();
  //TextSlideHook('sliding-sub-header');
  return (
    <div  className={`${styles.mainTop} ${styles.mainScreen} ${styles.mainAnimation}`}>
    <Row className={styles.mainTopTRow}>
      <Image
        src={theme === 'dark' ? logoLight : logoDark}
        alt="Develobar Logo"
        className={styles.mainTopLogo}
      />
    </Row>
    <Row className={styles.mainTopBRow}>
      <Typography.Title level={1} className={styles.header} id='header'>{homePageDictionary.header[uiStore.pageLanguage]}</Typography.Title>
      <Typography.Title level={2} id='sliding-sub-header' className={styles.slidingSubHeader}>{
        homePageDictionary.subHeader[uiStore.pageLanguage].split(',,').map((item, index) => {
          return <span key={index} style={{
            marginLeft: appDirection === "ltr" ? `${index * 5}rem` : 0,
            marginRight: appDirection === "rtl" ? `${index * 2}rem` : 0,
            lineHeight: '1.5',
          }}>{item}<br /></span>
        })
      }</Typography.Title>
    </Row>
  </div>
  )
});

export default MainTop