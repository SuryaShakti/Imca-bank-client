import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import FirstSection from '../src/components/pages/homePageComponents.js/FirstSection'
import OurServices from '../src/components/pages/homePageComponents.js/OurServices'

export default function Home() {
  return (
    <Box>
        <FirstSection />
        <Box my={4} />
        <OurServices />
    </Box>
  )
}
