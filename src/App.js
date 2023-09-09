import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import AppRouter from "./routers/AppRouter"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
