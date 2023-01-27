import React from 'react';
import { Box, Card, CardContent } from '@mui/system';
import { Typography } from '@mui/material';

const Card = () => {
  return (
    <Box width="300px">
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>Create</Typography>
                <Typography color="text.secondary" variant="body2">Text Ad</Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default Card