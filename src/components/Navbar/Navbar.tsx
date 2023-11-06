import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Logo from '../../assets/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: '122px',
          xs: '40px',
        },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className="home-link">
          Home
        </Link>
        <a href="#exercises" className="exercises-anchor">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
