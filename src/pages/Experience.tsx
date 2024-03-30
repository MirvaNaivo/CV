import { useState } from 'react';
import axios from 'axios'

/* Mui */
import { Box, Divider, Grid, Typography } from '@mui/material'


export default function Experience() {

    const [data, setData] = useState([{ company: "", date: "", role: "", description: "" }])

    const getWorkExperience = () => {
        axios.get('../db.json').then(response => {
            return setData(response.data.work_experience)
        })
    }

    getWorkExperience()

    return (
        <Grid item xs={12} md={8}>
            {data.map((experience) => (
                <Box sx={{ padding: '16px' }}>
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
                    <Typography sx={{ marginTop: '10px' }}>
                        {experience.description}
                    </Typography>
                </Box>
            ))}

        </Grid>
    )

}