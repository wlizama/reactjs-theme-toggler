import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

import TopBar from './TopBar'

const Home = () => {
    const theme = useContext(ThemeContext)[0]

    return (
        <div style={theme.Typography.root}>
            <TopBar />
        </div>
    )
}

export default Home
