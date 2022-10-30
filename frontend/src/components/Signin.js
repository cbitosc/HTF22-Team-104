import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default function Signin() {
    const go = useNavigate()
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}>
                <Box sx={{
                    fontWeight: 'bold',
                    fontSize: '20px'
                }}>Wake Up</Box>
                <br />
                <br />
                <Box sx={{
                    fontWeight: 'bold',
                    opacity: '0.8'
                }}>
                    Sign In
                </Box>
                <br />
                <TextField sx={{ width: '80%' }} id="email" label="Email Address" variant="outlined" />
                <br /><TextField id="pass" sx={{ width: '80%' }} label="Password" variant="outlined" />
                <Box onClick={() => {
                    go('/')
                }} sx={{
                    backgroundColor: '#FD182D',
                    fontSize: '20px',
                    color: 'white',
                    padding: '10px',
                    mt: '40px',
                    pl: '50px', pr: '50px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    width: '80%',
                    maxWidth: '200px'
                }}>
                    Sign In
                </Box>
                <br />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    Don't have an account? &ensp; <Link style={{ textDecoration: 'none' }} to='/Signup'>Sign Up</Link>
                </Box>
            </Box>
        </div>
    )
}
