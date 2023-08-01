import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { MuiButton } from 'components';
import { MuiTypography } from '../components/MuiTypography';

export const Basic = () => {
  return (
    <div>
      <MuiTypography />
      <MuiButton />
      <Divider sx={{ marginY: '2rem' }} />
    </div>
  );
};
