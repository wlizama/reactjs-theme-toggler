import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import ThemeToogler from '../components/ThemeToogler'

const TopBar = () => {

    const theme = useContext(ThemeContext)[0]

    const styles = {
        header : {
            ...theme.Colors.primary,
            padding: '10px',
            margin: 0,
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            display: 'flex',
            alignItems : 'center',
            justifyContent: 'space-between'
        },
        title: {
            // display: 
        },
        right: {
        }
    }

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Themed app</h1>
            <div style={styles.right}>
                <ThemeToogler />
            </div>
        </header>
    )
}

export default TopBar
