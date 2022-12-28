import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/gym_logo.png'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { 
          sm: '122px', xs: '40px' 
        },
        mt: {
          sm: '32px', xs: '20px'
        },
      }} px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{
          width:"80px",
          height:"80px",
          margin: '0 20px'
          
        }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to='/' style= {{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #673ab7'
        }}>
          Home
        </Link>
        <a href='#exercises' style={{
          textDecoration: 'none',
          color: '#3A1212',
        }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar