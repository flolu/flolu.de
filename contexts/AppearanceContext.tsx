import {FunctionComponent, ReactNode, useContext, useEffect, useState} from 'react'

import {isServer} from '@/lib//ssr'

import {createContextHack, Setter} from './utils'

export enum Themes {
  Light = 'light',
  Dark = 'dark',
}

export interface AppearanceContext {
  theme: Themes
  setTheme: Setter<Themes>
}

const AppearanceContextImpl = createContextHack<AppearanceContext>()

export function useAppearance() {
  return useContext(AppearanceContextImpl)
}

interface Props {
  children?: ReactNode
}

export const AppearanceProvider: FunctionComponent<Props> = ({children}) => {
  const [theme, setThemeInternal] = useState<Themes>(Themes.Light)

  const setTheme = (theme: Themes) => {
    localStorage.setItem('theme', theme)
    setThemeInternal(theme)
  }

  if (!isServer()) {
    document.body.className = ''
    document.body.classList.add(`theme-${theme}`)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) setThemeInternal(stored as Themes)
    }
  }, [])

  return (
    <AppearanceContextImpl.Provider value={{theme, setTheme}}>
      <div className="text-base sm:text-lg text-700 bg-50">{children}</div>
    </AppearanceContextImpl.Provider>
  )
}
