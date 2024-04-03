import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import { Box, Stack, createTheme } from '@mui/material'
import NavBar from './components/NavBar'
import Add from './components/Add'
import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <SideBar setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
