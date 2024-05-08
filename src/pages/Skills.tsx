import { useState, useEffect } from 'react';

import MW from '../images/MW.jpg'

/* Mui */
import { Divider, FormControl, Grid, List, ListItem, ListItemText, MenuItem, Paper, Select } from '@mui/material'

export default function Skills() {

    const [showSkills, setShowSkills] = useState(false)
    const [showSoftSkills, setShowSoftSkills] = useState(false)
    const [showLanguages, setShowLanguages] = useState(false)
    const [skills, setSkills] = useState([{ skill: "", level: "" }])
    const [soft, setSoft] = useState([{ skill: "", level: "" }])
    const [languages, setLanguages] = useState([{ language: "", level: "" }])

    useEffect(() => {
        getSkills()
        getSoftSkills()
        getLanguages()
    }, [])

    async function getSkills() {
        const response = await fetch("https://cv-mi5k.onrender.com/skills")
        const skills = await response.json()
        setSkills(skills)
    }

    async function getSoftSkills() {
        const response = await fetch("https://cv-mi5k.onrender.com/soft_skills")
        const skills = await response.json()
        setSoft(skills)
    }

    async function getLanguages() {
        const response = await fetch("https://cv-mi5k.onrender.com/languages")
        const languages = await response.json()
        setLanguages(languages)
    }

    const handleSkills = () => {
        setShowLanguages(false)
        setShowSkills(true)
        setShowSoftSkills(false)
    }

    const handleSoftSkills = () => {
        setShowLanguages(false)
        setShowSkills(false)
        setShowSoftSkills(true)
    }

    const handleLanguages = () => {
        setShowLanguages(true)
        setShowSkills(false)
        setShowSoftSkills(false)
    }    

    return (
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
                <Paper elevation={1} sx={{ p: 2 }}>
                    <img src={MW} width='325px' />
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <FormControl fullWidth>
                    <Select
                        displayEmpty
                        renderValue={(selected: []) => {
                            if (selected === undefined) {
                                return <em>Choose which skills to see</em>;
                            }

                            return selected.join(', ');
                        }}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem onClick={() => handleSkills()}>Development skills</MenuItem>
                        <MenuItem onClick={() => handleSoftSkills()}>Soft skills</MenuItem>
                        <MenuItem onClick={() => handleLanguages()}>Languages</MenuItem>
                    </Select>
                </FormControl>
                {showSkills ? 
                <List>
                    {skills.map((s) => (
                        <>
                            <ListItem>
                                <ListItemText primary={s.skill} secondary={s.level} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List> : ""}
                {showSoftSkills ? 
                <List>
                    {soft.map((s) => (
                        <>
                            <ListItem>
                                <ListItemText primary={s.skill} secondary={s.level} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List> : ""}
                {showLanguages ? 
                <List>
                    {languages.map((l) => (
                        <>
                            <ListItem>
                                <ListItemText primary={l.language} secondary={l.level} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List> : ""}
            </Grid>
        </Grid>
    )
}