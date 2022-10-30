import { Box } from '@mui/material'
import React from 'react'
export default function Footer() {
    return (
        <div><Box sx={{ mt: '30px' }}>
            <Box sx={{ fontsize: '20px', fontWeight: 'bold', opacity: '0.6' }}>Developed with love by</Box>
            <Box sx={{ mt: '10px' }}>
                <img src='/Images/logo.png'></img>
            </Box>
        </Box></div>
    )
}
