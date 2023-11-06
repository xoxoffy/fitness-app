import { Box } from '@mui/material';
import Banner from '../components/Banner/Banner';
import ExerciseSearch from '../components/ExerciseSearch/ExerciseSearch';
import Exercises from '../components/Exercises/Exercises';

const Home = () => {
  return (
    <Box>
      <Banner />
      <ExerciseSearch />
      <Exercises />
    </Box>
  );
};

export default Home;
