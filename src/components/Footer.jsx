import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/gym_logo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#e9e3f4">
      <Stack alignItems="center" justifyContent="center"  px="40px" pt="24px">
        <img src={Logo} alt="logo" width="60px"/>
        <Typography variant="h5" pb="40px">
          Made with ❤️ by Kira
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer