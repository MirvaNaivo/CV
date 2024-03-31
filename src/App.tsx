import { useState } from 'react'

/* Local Components */
import Home from './pages/Home'
import Personal from './pages/Personal'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Skills from './pages/Skills'
import './App.css'

/* Mui */
import { AppBar, Button, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Trirong',
    subtitle1: {
      fontSize: 14,
      fontStyle: 'italic'
    }
  }
})

function App() {

  const [home, setHome] = useState(true)
  const [personal, setPersonal] = useState(false)
  const [work, setWork] = useState(false)
  const [education, setEducation] = useState(false)
  const [skills, setSkills] = useState(false)

  const openHome = () => {
    setHome(true)
    setPersonal(false)
    setWork(false)
    setEducation(false)
    setSkills(false)
  }

  const openPersonalInfo = () => {
    setHome(false)
    setPersonal(true)
    setWork(false)
    setEducation(false)
    setSkills(false)
  }

  const openWorkExperience = () => {
    setHome(false)
    setPersonal(false)
    setWork(true)
    setEducation(false)
    setSkills(false)
  }

  const openEducation = () => {
    setHome(false)
    setPersonal(false)
    setWork(false)
    setEducation(true)
    setSkills(false)
  }

  const openSkills = () => {
    setHome(false)
    setPersonal(false)
    setWork(false)
    setEducation(false)
    setSkills(true)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Grid container spacing={4} sx={{ justifyContent: 'center', my: '0' }} > */}
        <AppBar position='sticky' sx={{ flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            onClick={openHome}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Home
          </Button>
          <Button
            onClick={openPersonalInfo}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            About Me
          </Button>
          <Button
            onClick={openWorkExperience}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Work Experience
          </Button>
          <Button
            onClick={openEducation}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Education
          </Button>
            <Button
              onClick={openSkills}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Skills
            </Button>
        </AppBar>

        <main>
          {home ? <Home /> : ""}
          {personal ? <Personal /> : ""}
          {work ? <Experience /> : ""}
          {education ? <Education /> : ""}
          {skills ? <Skills /> : ""}
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App