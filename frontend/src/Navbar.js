import React from 'react'
import { Box } from '@mui/system'
export default function Navbar() {
    return (
        <Box sx={{ p: '20px', display: 'flex' }}>
            <a href='/signin'>
                <svg width="47" height="25" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.2917 26.6667L41.125 20M41.125 20L33.2917 13.3333M41.125 20H13.7083M25.4583 26.6667V28.3333C25.4583 29.6594 24.8394 30.9312 23.7376 31.8689C22.6358 32.8065 21.1415 33.3333 19.5833 33.3333H11.75C10.1919 33.3333 8.69752 32.8065 7.59575 31.8689C6.49397 30.9312 5.875 29.6594 5.875 28.3333V11.6667C5.875 10.3406 6.49397 9.0688 7.59575 8.13112C8.69752 7.19344 10.1919 6.66666 11.75 6.66666H19.5833C21.1415 6.66666 22.6358 7.19344 23.7376 8.13112C24.8394 9.0688 25.4583 10.3406 25.4583 11.6667V13.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
            &emsp;
            <Box sx={{
                fontWeight: 'bold'
            }}>Wake Up</Box>
        </Box>
    )
}
