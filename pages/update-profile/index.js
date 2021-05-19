import { Box, Button, TextField, Typography } from '@material-ui/core'
import React from 'react'

const Index = () => {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            // height={'100vh'}
            width={'100%'}
            p={{ xs: 1, md: 3 }}
        >
            <Box
                boxShadow={2}
                borderRadius={'borderRadius'}
                p={{ xs: 1, md: 3 }}
                width={'100%'}
                bgcolor={'common.white'}
                maxWidth={'500px'}
            >
                <Box width={'100%'} mb={'15px'}>
                    <Typography align={'center'} color={'primary'} variant={'h6'}>
                        {'Update Profile'}
                    </Typography>
                </Box>
                <Box width={'100%'} mb={'5px'}>
                    <Typography variant={'caption'}>
                        {'Name'}
                    </Typography>
                </Box>
                <TextField
                    // label={'Email'}
                    // value={accountNumber}
                    // onChange={event => setAccountNumber(event.target.value)}
                    variant="outlined"
                    fullWidth
                    style={{ backgroundColor: '#ffffff' }}

                />
                <Box my={1} />
                <Box width={'100%'} mb={'5px'}>
                    <Typography variant={'caption'}>
                        {'Email'}
                    </Typography>
                </Box>
                <TextField
                    // label={'Email'}
                    // value={accountNumber}
                    // onChange={event => setAccountNumber(event.target.value)}
                    variant="outlined"
                    fullWidth
                    style={{ backgroundColor: '#ffffff' }}

                />
                <Box my={1} />
                <Box width={'100%'} mb={'5px'}>
                    <Typography variant={'caption'}>
                        {'Phone'}
                    </Typography>
                </Box>
                <TextField
                    // label={'Email'}
                    // value={accountNumber}
                    // onChange={event => setAccountNumber(event.target.value)}
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
                    {'Update'}
                </Button>
            </Box>
        </Box>
    )
}

export default Index

Index.title = 'Update Profile'
