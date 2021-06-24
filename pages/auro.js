import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import AuroWhyUsSignleItem from '../src/components/auroWhyUsSignleItem'

const Auro = () => {
    return (
        <div>
            <Container maxWidth={'xl'}>
                <Grid container spacing={4} component={Box} p={'20px'}>
                    <AuroWhyUsSignleItem />
                    <AuroWhyUsSignleItem />
                    <AuroWhyUsSignleItem />
                    <AuroWhyUsSignleItem />
                </Grid>
                <h1>abhay</h1>
                <h2>abhay</h2>
                <h3>abhay</h3>
                <h4>abhay</h4>
                <h5>abhay</h5>
            </Container>
        </div>
    )
}

export default Auro 
Auro.Layout = null