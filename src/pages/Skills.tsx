import { useState } from 'react';
import axios from 'axios'

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

    const getSkills = () => {
        axios.get('../db.json').then(response => {
            return setSkills(response.data.skills)
        })
    }

    const getSoftSkills = () => {
        axios.get('../db.json').then(response => {
            return setSoft(response.data.soft_skills)
        })
    }

    const getLanguages = () => {
        axios.get('../db.json').then(response => {
            return setLanguages(response.data.languages)
        })
    }

    const handleSkills = () => {
        getSkills()
        setShowLanguages(false)
        setShowSkills(true)
        setShowSoftSkills(false)
    }

    const handleSoftSkills = () => {
        getSoftSkills()
        setShowLanguages(false)
        setShowSkills(false)
        setShowSoftSkills(true)
    }

    const handleLanguages = () => {
        getLanguages()
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