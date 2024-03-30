import { useState } from 'react'
import ReactMarkdown from 'markdown-to-jsx';
import axios from 'axios'
import Professional from '../images/Professional.jpg'
import AboutMe from './AboutMe.md'

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
                <Typography>
                    <ReactMarkdown>
                        {AboutMe}
                    </ReactMarkdown>
                </Typography>
            </Grid>
        </Grid>
    )
}