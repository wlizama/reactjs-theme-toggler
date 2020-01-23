import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

import TopBar from './TopBar'
import Content from './Content'

const Home = () => {
    const theme = useContext(ThemeContext)[0]

    return (
        <div style={theme.Typography.root}>
            <TopBar />
            <Content />
        </div>
    )
}

export default Home
