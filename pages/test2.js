import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import BackImg from '../public/Rectangle77.png';


const useStyles = makeStyles({
    container: {
        backgroundImage: `url(${BackImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%'
    }
});

const Test2 = () => {
   
    const classes = useStyles();
   
    return (
        <Box className={classes.container}>

        </Box>
    );
};

export default Test2;
