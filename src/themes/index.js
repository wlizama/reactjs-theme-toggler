// export { default as DefaultTheme } from './default'
// export { default as DarkTheme } from './dark'
import { default as DefaultTheme } from './default'
import { default as DarkTheme } from './dark'

export {
    DefaultTheme,
    DarkTheme
}

export const ThemeList = [
    { label: "Light", ico: "🌞", theme: DefaultTheme, isDefault: true },
    { label: "Dark", ico: "🌑", theme: DarkTheme },
]