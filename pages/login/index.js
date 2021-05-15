import { Box, Button, CircularProgress, Container, Grid, Hidden, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useStore } from 'laco-react';
import UserStore from '../../src/store/UserStore';
import { authenticate } from '../../src/apis/authentication';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import ClientCaptcha from "react-client-captcha";
import BackImg from '../../public/Vector 44.svg'
import Vector from '../../public/undraw_secure_login_pdn4 1.svg';

const useStyles = makeStyles({
    conatiner: {
        backgroundImage: `url(${BackImg})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '100vh'
    }
})

const Index = () => {

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captchaCode, setCaptchaCode] = useState('');
    const [writtencaptchaCode, setWrittenCaptchaCode] = useState('');
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const Router = useRouter();
    const { user } = useStore(UserStore);

    useEffect(() => {
        if (user && user.role === 2) {
            Router.replace('/admin/dashboard');
        }else if(user && user.role === 1){
            Router.replace('/accountDetails');
        }
    }, []);

    
    
    const handleLogin = () => {
        setLoading(true);
        authenticate(email, password)
            .then((response) => {
                const { accessToken, user } = response;
                console.log(accessToken, user);
                localStorage.setItem('feathers-jwt', accessToken);
                UserStore.set(() => ({ token: accessToken, user }), 'login');
                enqueueSnackbar('Login successfully', { variant: 'success' });
                if (user.role === 2) {
                    Router.replace('/admin/dashboard');
                }
                else {
                    Router.replace('/accountDetails');
                }
            })
            .catch(error => {
                enqueueSnackbar(error.message && error.message ? error.message : 'Something went wrong!', { variant: 'warning' });
            }).finally(() => {
                setLoading(false);
            });
    };


    return (
        <Box className={classes.conatiner}>
            <Container maxWidth={'xl'}>
                <Grid container justify={'center'} alignItems={'center'} style={{ height: '100vh' }}>
                    <Hidden smDown>
                        <Grid item container xs={12} sm={6} justify={'center'} alignItems={'center'}>
                            <img width={'80%'} src={Vector} alt={'vector'} />
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        container
                        xs={12} sm={6}
                        justify={'center'}
                        alignItems={'center'}>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            width={'90%'}
                            maxWidth={'450px'}
                            borderRadius={'borderRadius'}
                            bgcolor={'#fafafa'}
                            boxShadow={4}
                            p={{ xs: 1, sm: 2 }}
                        >
                            <Hidden xsDown>
                                <Typography variant={'h3'} >
                                    {'Please Login to Continue'}
                                </Typography>
                            </Hidden>
                            <Hidden smUp>
                                <Typography variant={'h6'} style={{ fontWeight: 600, lineHeight: 1, margin: '15px 0' }} >
                                    {'Please Login to Continue'}
                                </Typography>
                            </Hidden>
                            <Box my={1} />
                            <Box width={'100%'} mb={'5px'}>
                                <Typography variant={'caption'}>
                                    {'Customer Id'}
                                </Typography>
                            </Box>
                            <TextField
                                // label={'Email'}
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                variant="outlined"
                                fullWidth
                                style={{ backgroundColor: '#ffffff' }}
                                
                            />
                            <Box my={1} />
                            <Box width={'100%'} mb={'5px'}>
                                <Typography variant={'caption'}>
                                    {'Password'}
                                </Typography>
                            </Box>
                            <TextField
                                // label={'Password'}
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                variant="outlined"
                                fullWidth
                                style={{ backgroundColor: '#ffffff' }}
                            />
                            <Box my={1} />
                            <Box display={'flex'} alignItems={'center'}
                                width={'100%'} justifyContent={{xs: 'center', md:'space-between'}}>
                                <Hidden smDown>
                                    <Typography variant={'caption'}>{'Captcha'}</Typography>
                                </Hidden>

                                <Box mr={2}>
                                    <ClientCaptcha
                                        width={200}
                                        backgroundColor={'#e1e0e0'}
                                        retryIconSize={20}
                                        captchaCode={code => {
                                            console.log(code);
                                            setCaptchaCode(code);
                                        }}>

                                    </ClientCaptcha>
                                </Box>
                            </Box>
                            <Box my={1} />
                            <Box width={'100%'} mb={'5px'}>
                                <Typography variant={'caption'}>
                                    {'Type Captcha Code'}
                                </Typography>
                            </Box>
                            <TextField
                                // label={'Password'}
                                value={writtencaptchaCode}
                                onChange={event => setWrittenCaptchaCode(event.target.value)}
                                variant="outlined"
                                fullWidth
                                style={{ backgroundColor: '#ffffff' }}
                            />
                            <Box my={1} />
                            <Button disabled={loading} onClick={() => handleLogin()} variant="contained" color={'primary'} fullWidth>
                                {loading ? <CircularProgress
                                    size={24}
                                /> : 'Login'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid >
            </Container>
        </Box >
    )
}

export default Index
