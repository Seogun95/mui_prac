import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { MuiButton, MuiTypography, MuiTextField } from 'components';
import { MuiSelect } from '../components/MuiSelect';
import { MuiRadioButton } from '../components/MuiRadioButton';

export const Basic = () => {
  return (
    <div>
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <Divider sx={{ marginY: '2rem' }} />
    </div>
  );
};
