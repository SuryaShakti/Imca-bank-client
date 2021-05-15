import { AppBar, Box, Button, Container, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react';
import BackImg from '../public/Vector 34 (6).svg';
import Vector1 from '../public/Group 3 (2).svg';

const useStyles = makeStyles({
    container: {
        backgroundImage: `url(${BackImg})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
    }
});

const Test = () => {

    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.container} height={'100vh'} width={'100%'}>
                <AppBar style={{ background: 'transparent', boxShadow: 'none' }} position={'static'}>
                    <Toolbar>
                        <Typography color={'textPrimary'} variant={'h3'}>
                            {'IMCA BANK'}
                        </Typography>
                        <Box flex={1} ></Box>
                        <Box display={'flex'}>
                            <Typography color={'primary'} variant={'body2'}>
                                {'Home'}
                            </Typography>
                            <Box mr={3} />
                            <Typography color={'primary'} variant={'body2'}>
                                {'About'}
                            </Typography>
                            <Box mr={3} />
                            <Typography color={'primary'} variant={'body2'}>
                                {'Branches'}
                            </Typography>
                            <Box mr={3} />
                            <Typography color={'primary'} variant={'body2'}>
                                {'Services'}
                            </Typography>
                            <Box mr={3} />
                            <Typography color={'primary'} variant={'body2'}>
                                {'Login'}
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Container
                    maxWidth={'xl'}
                    component={Box}
                    height={'calc(100vh - 48px)'}
                >
                    <Grid
                        component={Box}
                        container
                        spacing={3}
                        alignItems={'center'}
                    >
                        <Grid item xs={12} md={8}>
                            <Box pl={{ xs: 0, sm: 4, md: 7 }}>
                                <Box mb={2} display={'flex'}>
                                    <Typography variant={'h1'}>
                                        {'Welcome to '}
                                    </Typography>
                                    <Box mr={1} />
                                    <Typography color={'primary'} variant={'h1'}>
                                        {' IMCA Bank'}
                                    </Typography>
                                </Box>
                                <Box pr={{ xs: 0, md: '100px' }}>
                                    <Typography variant={'body2'} >
                                        {'Here our priority is your covinience so that you can do multiple tasks from your own home without physically coming to the bank.Here our priority is your covinience so that you can do multiple tasks from your own home without physically coming to the bank.Here our priority is your covinience so that you can do multiple tasks from your own home without physically coming to the bank.'}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}
                            component={Box}
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={{ xs: 'center', sm: 'flex-start' }}
                        >
                            <Box width={'250px'} mb={2}>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    fullWidth
                                    size={'large'}
                                >
                                    {'Login'}
                                </Button>
                            </Box>
                            <Box width={'250px'}>
                                <Button
                                    fullWidth
                                    size={'large'}
                                    variant={'contained'}
                                    color={'secondary'}
                                >
                                    {'Contact Us'}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box>
                        <img height={'400px'} src={Vector1} alt={'image 1'} />
                    </Box>
                </Container>

            </Box>
        </Box>
    )
}

export default Test
