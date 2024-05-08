import { useEffect, useState } from 'react';

import Hiking from '../images/Hiking.jpg'

/* Mui */
import { Divider, Grid, Paper, Typography } from '@mui/material'

export default function Experience() {

    const [data, setData] = useState([{ company: "", date: "", role: "", description: "" }])

    useEffect(() => {
        getExperience()
    }, [])
   
    async function getExperience() {
        const response = await fetch("https://cv-latest.onrender.com/work_experience")
        const experience = await response.json()
        setData(experience)
    }

    return (
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
                <Paper elevation={1} sx={{ p: 2 }}>
                    <img src={Hiking} width='325px'/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                {data.map((experience) => (
                    <>
                        <Typography variant='h6' gutterBottom>
                            {experience.company}
                        </Typography>
                        <Divider />
                        Date:
                        <Typography variant='subtitle1'>
                            {experience.date}
                        </Typography>
                        Role:
                        <Typography variant='subtitle1'>
                            {experience.role}
                        </Typography>
                        <Typography sx={{ my: '16px' }}>
                            {experience.description}
                        </Typography>
                    </>
                ))}
            </Grid>
        </Grid>
    )

}