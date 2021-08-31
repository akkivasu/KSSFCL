import React from 'react'
import Home from './pages/Home';
import './index.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue, yellow } from '@material-ui/core/colors'

const theme = createTheme ({
  palette: {
    primary: blue
  }
})

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <Home />
    </ ThemeProvider>
  )
}

export default App;