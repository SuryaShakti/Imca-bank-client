import { Box, Button, Hidden, Typography } from '@material-ui/core'
import { useStore } from 'laco-react';
import React from 'react'
import UserStore from '../../src/store/userStore';

const Index = () => {

    const { user } = useStore(UserStore);


    return (
        <React.Fragment>
            <Hidden xsDown>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    // height={'100vh'}
                    width={'100%'}
                    p={{ xs: 1, md: 3 }}
                >
                    <Box
                        borderRadius={'borderRadius'}
                        height={'400px'}
                        width={'100%'}
                        maxWidth={'500px'}
                        display={'flex'}
                        flexDirection={'column'}
                        boxShadow={3}
                        bgcolor={'common.white'}
                    >
                        <Box
                            height={'250px'}
                            width={'100%'}
                            bgcolor={'primary.main'}
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            style={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px' }}
                        >
                            <Typography variant={'h1'} color={'textSecondary'}>
                                {'Available Amount'}
                            </Typography>
                            <Typography variant={'h1'} color={'textSecondary'}>
                                {`₹ ${user.accounts[0].balance}.00`}
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
                                style={{ borderBottomLeftRadius: '12px' }}
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <Typography variant={'h6'} color={'textSecondary'}>
                                    {'Minimum Amount'}
                                </Typography>
                                <Typography variant={'h6'} color={'textSecondary'}>
                                    {'2000.00'}
                                </Typography>
                            </Box>
                            <Box
                                height={'100%'}
                                width={'50%'}
                                style={{ borderBottomRightRadius: '12px' }}
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                px={{ xs: 2, md: 3 }}
                            >
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    fullWidth
                                >
                                    {'Mini Statements'}
                                </Button>
                                <Box my={1} />
                                <Button
                                    variant={'contained'}
                                    color={'secondary'}
                                    fullWidth
                                >
                                    {'Funds Transfer'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Hidden>
            <Hidden smUp>
                <Box
                    borderRadius={'borderRadius'}
                    boxShadow={2}
                    width={'100%'}
                    p={1}
                    bgcolor={'common.white'}
                >
                    <Box
                        borderRadius={'borderRadius'}
                        width={'100%'}
                        mb={1}
                        bgcolor={'primary.main'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        height={'100px'}
                    >
                        <Typography variant={'h6'} color={'textSecondary'}>
                            {'Minimum Amount'}
                        </Typography>
                        <Typography variant={'h6'} color={'textSecondary'}>
                            {'2000.00'}
                        </Typography>
                    </Box>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        fullWidth
                    >
                        {'Check Mini Statements'}
                    </Button>
                    <Box my={1} />
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                    >
                        {'Transfer Funds'}
                    </Button>
                </Box>
            </Hidden>
        </React.Fragment>
    )
}

export default Index

Index.title = 'Balance Enquiry'