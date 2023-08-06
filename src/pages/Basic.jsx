import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { MuiButton, MuiTypography, MuiTextField } from 'components';

export const Basic = () => {
  return (
    <div>
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <Divider sx={{ marginY: '2rem' }} />
    </div>
  );
};
