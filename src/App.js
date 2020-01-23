import React, { useState } from 'react'

import { ThemeProvider } from './context/ThemeContext'
import { DefaultTheme } from './theme'

import Home from './components/Home'

const App = () => {

	const theme = useState(DefaultTheme)

	return (
		<ThemeProvider value={theme}>
			<Home />
		</ThemeProvider>
	)
}

export default App