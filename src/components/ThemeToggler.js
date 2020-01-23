import React, { useState, useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'
import { ThemeList } from '../themes'

const ThemeToggler = () => {

    const setTheme = useContext(ThemeContext)[1]
    const [userTheme, setUserTheme] = useState(localStorage.getItem("userTheme"))

    const changeTheme = (evt) => {
        const themeVal = evt.target.value
        const themeSelected = ThemeList.filter( val => val.label === themeVal )
        setTheme(themeSelected[0].theme)
        setUserTheme(themeVal)
        localStorage.setItem('userTheme', themeVal)
    }

    return (
        <div>
            <select onChange={e => changeTheme(e)} defaultValue={userTheme}>
                {ThemeList.map( (opt, idx) => (
                <option key={idx} value={opt.label}>
                    {opt.ico} {opt.label}
                </option>
                ))}
            </select>
        </div>
    )
}

export default ThemeToggler
