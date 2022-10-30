import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default function Signup() {
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
                    Sign Up
                </Box>
                <br />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-even',
                    width: '80%'
                }}>
                    <TextField id="fname" sx={{ width: '100%' }} label="First Name" variant="outlined" />&ensp;
                    <TextField id="lname" sx={{ width: '100%' }} label="Last Name" variant="outlined" />
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
                    Sign Up
                </Box>
                <br />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    Already have an account? &ensp; <Link style={{ textDecoration: 'none' }} to='/Signin'>Sign In</Link>
                </Box>
            </Box>
        </div>
    )
}
