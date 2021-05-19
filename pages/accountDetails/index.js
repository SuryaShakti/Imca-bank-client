import { Avatar, Box, Typography } from '@material-ui/core'
import { useStore } from 'laco-react'
import React, { useState } from 'react'
import UserStore from '../../src/store/userStore'

const Index = () => {

    const { user } = useStore(UserStore);

    console.log(user);

    // const [accounts, setAccounts] = useState(user.accounts);

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
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Avatar style={{width: '100%', height: '100%'}} src={user.avatar}></Avatar>
                        </Box>
                        <Typography variant={'body1'} align={'center'}>
                            {user.name}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {user.address}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {`Phone : ${user.phone}`}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {`Email : ${user.email}`}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {`DOB : ${user.dob}`}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {`Gender : ${user.gender === 1 ? 'Male' : 'Female'}`}
                        </Typography>
                        <Box mb={2} />
                        <Typography variant={'body2'} align={'center'}>
                            {`Adhaar no : ${user.aadhar}`}
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