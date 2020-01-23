import React, { useState } from 'react'

import { ThemeProvider } from './context/ThemeContext'
import { ThemeList } from './themes'

import Home from './components/Home'

const App = () => {

	const getUserTheme = () => {
		let userTheme = ThemeList.filter( theme => theme.isDefault )[0]
		const lsTheme = localStorage.getItem("userTheme")
		if (lsTheme)
			userTheme = ThemeList.filter( theme => theme.label.toLowerCase() === lsTheme.toLowerCase() )[0]

		return userTheme.theme
	}

	const theme = useState(getUserTheme())

	return (
		<ThemeProvider value={theme}>
			<Home />
		</ThemeProvider>
	)
}

export default App