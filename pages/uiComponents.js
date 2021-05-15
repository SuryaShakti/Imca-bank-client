import { Box, Button, Container, Grid, Hidden, TextField, Typography } from "@material-ui/core"
import React, { useState } from "react";
import Image1 from '../public/Group 61.svg';

const UiComponents = () => {


    const [accountNumber, setAccountNumber] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [amount, setAmount] = useState('');


    return (
        <React.Fragment>
            {/* // ^------------------------- Home Page First section ------------------------------- */}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={{ xs: 1, md: 0 }}>
                <Hidden smDown>
                    <Box width={'50%'} height={'100vh'} bgcolor={'primary.main'}>
                    </Box>
                </Hidden>
                <Box width={{ xs: '100%', md: '50%' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box width={{ xs: 'auto', md: '45vw' }}>
                        <Box display={'flex'} my={2}>
                            <Typography variant={'h1'}>
                                {'Welcome to the'}
                            </Typography>
                            <Box ml={{ xs: 1, md: 2 }} />
                            <Typography color={'primary'} variant={'h1'}>
                                {'IMCA Bank'}
                            </Typography>
                        </Box>
                        <Typography variant={'body2'}>
                            {'Here our priority is your covinience so that you can do multiple tasks from your own home without physically coming to the bank. Here our priority is your covinience so that you can do multiple tasks from your own home without physically coming to the bank.'}
                        </Typography>
                        <Box my={2} display={{ xs: 'block', md: 'flex' }} >
                            <Hidden smDown>
                                <Box mr={2}>
                                    <Button
                                        variant={'contained'}
                                        color={'primary'}
                                        component={Box}
                                        width={'200px'}
                                    >
                                        {'Login'}
                                    </Button>
                                </Box>
                                <Button
                                    variant={'contained'}
                                    color={'secondary'}
                                    component={Box}
                                    width={'200px'}
                                    style={{ color: '#ffffff' }}
                                >
                                    {'Conatct Us'}
                                </Button>
                            </Hidden>
                            <Hidden mdUp>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    fullWidth
                                >
                                    {'Login'}
                                </Button>
                                <Box my={2} />
                                <Button
                                    variant={'contained'}
                                    color={'secondary'}
                                    fullWidth
                                    style={{ color: '#ffffff' }}
                                >
                                    {'Conatct Us'}
                                </Button>
                            </Hidden>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* // ^------------------------- Home Page our services ------------------------------- */}

            <Box my={'100px'}></Box>

            <Container maxWidth={'xl'}>
                <Grid container>
                    <Grid container justify={'center'} item xs={8} sm={8} direction={'column'} alignItems={'flex-end'}>
                        <Typography variant={'h3'} color={'primary'}>
                            {'Balance Enquiry'}
                        </Typography>
                        <Typography variant={'caption'}>
                            {'You can check the available balance of your account, minimum balance that should be always there in your account.'}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} width={'100%'}>
                        <img width={'80%'} src={Image1} alt={'image1'} />
                    </Grid>
                </Grid>
            </Container>

            <Box my={'100px'} />

            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'100vh'}
                p={{ xs: 1, md: 3 }}
            >
                <Box
                    boxShadow={2}
                    width={{ xs: '95%', md: '75%' }}
                    borderRadius={'borderRadius'}
                    p={{ xs: 1, md: 2 }}
                    display={{ xs: 'block', md: 'flex' }}
                    justifyContent={'space-between'}
                >
                    <Box
                        width={{ xs: '100%', md: '48%' }}
                        borderRadius={'borderRadius'}
                        boxShadow={2}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                        p={2}
                    >
                        <Box
                            borderRadius={'50%'}
                            width={{ xs: '100px', md: '200px' }}
                            height={{ xs: '100px', md: '200px' }}
                            bgcolor={'#c1c1c1'}
                            my={2}
                        >
                        </Box>
                        <Typography variant={'body1'} align={'center'}>
                            {'Surya Shakti'}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {'Plot 97, Old twon, Bhubaneshwar, Odisha'}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {'Phone : 6370882409'}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {'Email : suryashakti1999@gmail.com'}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {'DOB : 10-10-1999'}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {'Adhaar no : xxxx xxxx 9927 '}
                        </Typography>
                        <Box mb={2} />
                    </Box>
                    <Box
                        width={{ xs: '100%', md: '48%' }}
                        borderRadius={'borderRadius'}
                        boxShadow={2}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                        p={2}
                    >
                        <Box
                            width={{ xs: '100%', md: '80%' }}
                            display={'flex'}
                            my={1}
                            justifyContent={'space-between'}
                        >
                            <Typography variant={'body1'}>
                                {'Account Number'}
                            </Typography>
                            <Typography variant={'body2'}>
                                {'263520000202'}
                            </Typography>
                        </Box>
                        <Box
                            my={1}
                            width={{ xs: '100%', md: '80%' }}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Typography variant={'body1'}>
                                {'Account Number'}
                            </Typography>
                            <Typography variant={'body2'}>
                                {'263520000202'}
                            </Typography>
                        </Box>
                        <Box
                            my={1}
                            width={{ xs: '100%', md: '80%' }}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Typography variant={'body1'}>
                                {'Account Number'}
                            </Typography>
                            <Typography variant={'body2'}>
                                {'263520000202'}
                            </Typography>
                        </Box>
                        <Box
                            my={1}
                            width={{ xs: '100%', md: '80%' }}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Typography variant={'body1'}>
                                {'Account Number'}
                            </Typography>
                            <Typography variant={'body2'}>
                                {'263520000202'}
                            </Typography>
                        </Box>
                        <Box
                            my={1}
                            width={{ xs: '100%', md: '80%' }}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Typography variant={'body1'}>
                                {'Account Number'}
                            </Typography>
                            <Typography variant={'body2'}>
                                {'263520000202'}
                            </Typography>
                        </Box>
                        <Box
                            my={1}
                            width={{ xs: '100%', md: '80%' }}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Typography variant={'body1'}>
                                {'Account Number'}
                            </Typography>
                            <Typography variant={'body2'}>
                                {'263520000202'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'100vh'}
                p={{ xs: 1, md: 3 }}
            >
                <Box
                    boxShadow={2}
                    borderRadius={'borderRadius'}
                    p={{ xs: 1, md: 3 }}
                    width={'100%'}
                    maxWidth={'500px'}
                >
                    <Box width={'100%'} mb={'5px'}>
                        <Typography variant={'caption'}>
                            {'From'}
                        </Typography>
                    </Box>
                    <Box
                        borderRadius={'borderRadius'}
                        bgcolor={'#e5e5e5'}
                        px={'15px'}
                        py={'15px'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        mb={2}
                    >
                        <Typography variant={'subtitle1'}>
                            {'Account'}
                        </Typography>
                        <Typography variant={'subtitle1'}>
                            {'200295188881'}
                        </Typography>
                    </Box>
                    <Box width={'100%'} mb={'5px'}>
                        <Typography variant={'caption'}>
                            {'To'}
                        </Typography>
                    </Box>
                    <Box my={1} />
                    <Box width={'100%'} mb={'5px'}>
                        <Typography variant={'caption'}>
                            {'Account Number'}
                        </Typography>
                    </Box>
                    <TextField
                        // label={'Email'}
                        value={accountNumber}
                        onChange={event => setAccountNumber(event.target.value)}
                        variant="outlined"
                        fullWidth
                        style={{ backgroundColor: '#ffffff' }}

                    />
                    <Box my={1} />
                    <Box width={'100%'} mb={'5px'}>
                        <Typography variant={'caption'}>
                            {'IFSC code'}
                        </Typography>
                    </Box>
                    <TextField
                        // label={'Email'}
                        value={ifsc}
                        onChange={event => setIfsc(event.target.value)}
                        variant="outlined"
                        fullWidth
                        style={{ backgroundColor: '#ffffff' }}

                    />
                    <Box my={1} />
                    <Box width={'100%'} mb={'5px'}>
                        <Typography variant={'caption'}>
                            {'Amount'}
                        </Typography>
                    </Box>
                    <TextField
                        // label={'Email'}
                        value={amount}
                        onChange={event => setAmount(event.target.value)}
                        variant="outlined"
                        fullWidth
                        style={{ backgroundColor: '#ffffff' }}

                    />
                    <Box my={2} />

                    <Button
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                    >
                        {'Send'}
                    </Button>

                </Box>
            </Box>

            <Box my={'100px'} />

            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'100vh'}
                p={{ xs: 1, md: 3 }}
            >
                <Box
                    borderRadius={'borderRadius'}
                    height={'400px'}
                    width={'100%'}
                    maxWidth={'500px'}
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Box
                        height={'250px'}
                        width={'100%'}
                        borderRadius={'borderRadius'}
                        bgcolor={'primary.main'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography variant={'h1'} color={'textSecondary'}>
                            {'Available Amount'}
                        </Typography>
                        <Typography variant={'h1'} color={'textPrimary'}>
                            {'200000.00'}
                        </Typography>
                    </Box>
                    <Box
                        height={'150px'}
                        width={'100%'}
                        borderRadius={'borderRadius'}
                        display={'flex'}
                    >
                        <Box
                            height={'100%'}
                            width={'50%'}
                            bgcolor={'secondary.main'}
                        >

                        </Box>
                        <Box
                            height={'100%'}
                            width={'50%'}
                            bgcolor={'error.main'}
                        >

                        </Box>

                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
}

export default UiComponents
