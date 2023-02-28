import { ConfigProvider } from "antd"
import rootStore from "@/store"
import { Roboto, Heebo } from '@next/font/google'
import { observer } from "mobx-react-lite"
import { ThemeProvider } from "next-themes"
import { getAppDirection } from "@/utils/appDirection"
import { useEffect, useState } from "react"

type Props = {
  children: React.ReactNode
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: '300'
})

const heebo = Heebo({
  subsets: ['latin'],
  weight: '300'
})


export const Providers = observer(({ children }: Props) => {

  const [font, setFont] = useState(heebo.className);

  const { uiStore } = rootStore;
  const appDirection = getAppDirection();
  useEffect(() => {
    setFont(uiStore.pageLanguage === 'he' ? heebo.className : roboto.className);
  }, [uiStore.pageLanguage]);

  return (
    <ConfigProvider direction={appDirection}>
      <ThemeProvider defaultTheme={"dark"} themes={['dark', 'light']}>
        <main className={font}>
          {children}
        </main>
      </ThemeProvider>
    </ConfigProvider>
  )
});