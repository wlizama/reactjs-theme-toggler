import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { DefaultTheme, DarkTheme } from '../theme'

const optionsThemes = [
    { label: "Dark", ico: "🌑", theme: DarkTheme },
    { label: "Light", ico: "🌞", theme: DefaultTheme },
]

const ThemeToogler = () => {

    const [theme, setTheme] = useContext(ThemeContext)


    const changeTheme = (evt) => {
        const themeSelected = optionsThemes.filter( val => val.label === evt.target.value )
        setTheme(themeSelected[0].theme)
        console.log(evt.target.value, themeSelected)
    }

    return (
        <div>
            <select onChange={e => changeTheme(e)}>
                {optionsThemes.map( (opt, idx) => (
                <option key={idx} value={opt.label}>
                    {opt.ico} {opt.label}
                </option>
                ))}
            </select>
        </div>
    )
}

export default ThemeToogler
