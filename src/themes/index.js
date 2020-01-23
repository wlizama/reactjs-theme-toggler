// export { default as DefaultTheme } from './default'
// export { default as DarkTheme } from './dark'
import { default as DefaultTheme } from './default'
import { default as DarkTheme } from './dark'
import { default as BlueTheme } from './blue'

export {
    DefaultTheme,
    DarkTheme
}

export const ThemeList = [
    { label: "Light", ico: "🌞", theme: DefaultTheme, isDefault: true },
    { label: "Dark", ico: "🌑", theme: DarkTheme },
    { label: "Blue", ico: "🔵", theme: BlueTheme },
]