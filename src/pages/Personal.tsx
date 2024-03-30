import { useState } from 'react'
import axios from 'axios'
import Professional from '../images/Professional.jpg'

/* Mui */
import { Grid, Link, Paper, Typography } from '@mui/material'

export default function Personal() {

    const [data, setData] = useState({ name: "", email: "", linkedin: "", github: "" })

    const getPersonalInfo = () => {
        axios.get('../db.json').then(response => {
            return setData(response.data.personal_info)
        })
    }

    getPersonalInfo()

    return (
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={6} md={4}>
                <Paper elevation={1} sx={{ p: 2, marginBottom: 2 }}>
                    <Typography>{data.name}</Typography>
                    <Typography>{data.email}</Typography>
                    <Link href={data.linkedin}>LinkedIn</Link> <br />
                    <Link href={data.github}>Github</Link>
                </Paper>
                <Paper elevation={1} sx={{ p: 2 }}>
                    <img src={Professional} width='325px' />
                </Paper>
            </Grid>
            <Grid item xs={12} md={8} >
                <Typography variant='h4' gutterBottom>
                    About me
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I am a new talent in developing looking for the next adventure in Fullstack Development.
                    I have wide knowlegde in different business fields which is an advantage when
                    developing programs to different types of customers.
                </Typography>
                <Typography variant='h6' gutterBottom>
                    My Specialities
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I love to solve problems, improve myself and the ways I work. I always think of the big picture, even though I love to focus on the smallest details.
                    I'm very analytical and pedantic. Learning new things and becoming a professional in my own field is something I strive for.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    In my studies I mastered the basics of Full Stack Developing. My favorite things are SQL, C# and Asp.Net Core.
                    I also enjoy using React and Node.js. I am a beginner in Azure, AWS and Python, but fortunately I'm exceptionally fast learner.
                </Typography>
                <Typography variant='h6' gutterBottom>
                    Hobbies
                </Typography>
            </Grid>
        </Grid>
    )
}