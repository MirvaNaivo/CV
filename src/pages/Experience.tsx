import { useState } from 'react';
import axios from 'axios'

import Hiking from '../images/Hiking.jpg'

/* Mui */
import { Divider, Grid, Paper, Typography } from '@mui/material'


export default function Experience() {

    const [data, setData] = useState([{ company: "", date: "", role: "", description: "" }])

    const getWorkExperience = () => {
        axios.get('../db.json').then(response => {
            return setData(response.data.work_experience)
        })
    }

    getWorkExperience()

    return (
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={6} md={4}>
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