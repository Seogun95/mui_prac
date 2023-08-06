import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
  MuiButton,
  MuiTypography,
  MuiTextField,
  MuiCheckBox,
  MuiSelect,
  MuiRadioButton,
} from 'components';

export const Basic = () => {
  return (
    <div>
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <Divider sx={{ marginY: '2rem' }} />
    </div>
  );
};
