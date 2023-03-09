import style from '@/styles/about.module.scss'
import { Typography } from 'antd'
import aboutMeDictionary from "@/lang/about-page.json"
import rootStore from "@/store"
import Image from 'next/image'
import { getAppDirection } from '@/utils/appDirection'
import { observer } from 'mobx-react-lite'
import profile from '../../../public/Profile.jpeg'

const AboutMe = observer(() => {
  const { uiStore } = rootStore;
  const appDirection = getAppDirection();

  return (
    <div dir={appDirection} className={style.aboutMeDiv}>
      <div className={style.aboutImageDiv}>
      <Image
        src={profile}
        alt="About Me"
        className={style.aboutMeImage}
        width={350}
        height={350}
      />
            </div>
      <div className={style.aboutTextDiv}>
      <Typography.Title className={style.aboutMeHeading} level={1}>
        {aboutMeDictionary['about-me'][uiStore.pageLanguage]}
      </Typography.Title>
      <Typography.Paragraph
        className={style.aboutMeDetails}
      >
        {aboutMeDictionary['about-me-details'][uiStore.pageLanguage]}
      </Typography.Paragraph>
      </div>
    </div>
  )
});

export default AboutMe