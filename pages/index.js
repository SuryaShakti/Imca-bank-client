import { Box, Typography } from '@material-ui/core'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
         <Box width={'400px'} height={'400px'} bgcolor={'primary.main'} p={2} borderRadius={16} display={'flex'} justifyContent={'center'} alignItems={'center'} 
         flexDirection={'column'}> 
            <Typography variant={'h4'}>
                {'Auro The Alap Boiii'}
            </Typography>
            <Typography variant={'h4'}>
                {'Adi the Allino Boiii'}
            </Typography>
         </Box>
    </div>
  )
}
