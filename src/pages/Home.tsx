import Header from '../images/Header.jpg'
import Schoolpic from '../images/Schoolpic.jpg'
import LakeView from '../images/Kaitajärvi.jpg'

/* Mui */
import { Paper, Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'

export default function Home() {

    return (
        <>
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${Header})`,
                    height: '350px'
                }}
            >
                {<img style={{ display: 'none' }} src={Header} />}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                            }}
                        >
                            <Typography component='h1' variant='h3' color='inherit' gutterBottom>
                                Welcome
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                Find out more!
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Tap on the buttons above to find out more about me and the reasons why you should hire me.
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                            image={LakeView}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                And added bonus..
                            </Typography>
                            <Typography variant="body1" paragraph>
                                You get to enjoy cute pictures of my dog!
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                            image={Schoolpic}
                        />
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}