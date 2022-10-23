import {FC} from 'react'

import {Themes, useAppearance} from '../contexts/AppearanceContext'
import {DarkModeIcon} from './Icons/DarkModeIcon'
import {LightModeIcon} from './Icons/LightModeIcon'

export const ThemeSwitcher: FC = () => {
  const appearance = useAppearance()

  const onSwitchTheme = () => {
    if (appearance.theme === Themes.Light) appearance.setTheme(Themes.Dark)
    if (appearance.theme === Themes.Dark) appearance.setTheme(Themes.Light)
  }

  return (
    <span
      className="w-6 cursor-pointer fill-current text-primary-500 hover:text-primary-700"
      aria-label="toggle theme"
      role="button"
      onClick={onSwitchTheme}
    >
      {appearance.theme === Themes.Light && <LightModeIcon />}
      {appearance.theme === Themes.Dark && <DarkModeIcon />}
    </span>
  )
}
