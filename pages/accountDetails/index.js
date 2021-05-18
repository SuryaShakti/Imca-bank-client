import { Box, Typography } from '@material-ui/core'
import { useStore } from 'laco-react'
import React from 'react'
import UserStore from '../../src/store/UserStore'

const Index = () => {

    const { user } = useStore(UserStore);

    console.log(user);

    return (
        user  && user.accounts ?
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                // height={'100vh'}
                p={{ xs: 1, md: 3 }
                }
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
            </Box >
            : null
    )
}

export default Index

Index.title = 'Account Details';