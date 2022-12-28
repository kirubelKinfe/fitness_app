import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/Bench Press.svg'


const BodyPart = ( { item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
          borderTop: bodyPart === item ? '4px solid #673ab7' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '140px',
          height: '160px',
          cursor: 'pointer',
          gap: '20px'
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({bottom: -200, left: 100, behavior: 'smooth'})
      }}
    >
      <img  src={Icon} alt="dumbbell" style={{
        width: '40px',
        height: '40px'
      }} />
      <Typography
        fontSize="20px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart