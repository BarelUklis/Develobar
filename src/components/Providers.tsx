"use client"
import { ConfigProvider } from "antd"
import rootStore from "@/store"
import { Roboto, Heebo } from '@next/font/google'
import { observer } from "mobx-react-lite"
import { ThemeProvider } from "next-themes"
import { getAppDirection } from "@/utils/appDirection"

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

  const { uiStore } = rootStore;
  const appDirection = getAppDirection();
  const font = uiStore.pageLanguage === 'he' ? heebo.className : roboto.className;

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