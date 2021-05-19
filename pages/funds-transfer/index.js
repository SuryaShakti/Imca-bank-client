import { Box, Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const Index = () => {

    const [accountNumber, setAccountNumber] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [amount, setAmount] = useState('');


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
    )
}

export default Index

Index.title = 'Funds Transfer';