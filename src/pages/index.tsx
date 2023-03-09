import styles from '@/styles/home.module.scss'
import { observer } from 'mobx-react-lite'
import TextSlideHook from '@/hooks/textSlideHook'
import dynamic from 'next/dynamic'
const MainTop = dynamic(() => import('@/components/main-components/mainTop'), { ssr: false })
const DirectionLayout = dynamic(() => import('@/components/layouts/DirectionLayout'), { ssr: false })

const Home = observer(() => {
  TextSlideHook('sliding-sub-header');
  return (
    <>
      <DirectionLayout>
        <div className={styles.main}>
          <MainTop />
        </div>
      </DirectionLayout>
    </>
  )
});

export default Home