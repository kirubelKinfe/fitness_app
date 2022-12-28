import { Link } from "react-router-dom"
import { Button, Stack, Typography } from "@mui/material"

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' width={300} />
      <Stack direction="row">
        <Button
          sx={{ ml: '21px', color: '#fff', background: '#12acc9',
                fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{ ml: '21px', color: '#fff', background: '#fdab12',
                fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000"
      pb="10px" fontWeight="bold" mt="11px" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard