import dynamic from 'next/dynamic'
const DirectionLayout = dynamic(() => import('@/components/layouts/DirectionLayout'), { ssr: false })
import style from '@/styles/about.module.scss'
import { observer } from 'mobx-react-lite'
const AboutMe = dynamic(() => import('@/components/about/aboutMe'), { ssr: false })
const AboutStack = dynamic(() => import('@/components/about/aboutStack'), { ssr: false })

const About = observer(() => {
  return (
    <>
      <DirectionLayout>
        <div className={style.mainAbout}>
          <AboutMe />
          <AboutStack />
        </div>
      </DirectionLayout>
    </>
  )
})

export default About