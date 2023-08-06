import React, { useState } from 'react';

import {
  Typography,
  FormHelperText,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { MuiButtonContainer } from './button/MuiButtonContainer';

export const MuiRadioButton = () => {
  const [value, setValue] = useState('');
  const handleChangeRadio = e => setValue(e.target.value);

  return (
    <>
      <Typography variant="h2" fontWeight="bold" margin={2}>
        RadioButton
      </Typography>

      <MuiButtonContainer text={'RadioButton'}>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChangeRadio}
            row
          >
            <FormControlLabel
              control={<Radio size="small" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="3-5"
              value="3-5"
            />
            <FormControlLabel
              control={<Radio color="secondary" />}
              label="6-10"
              value="6-10"
            />
          </RadioGroup>
          <FormHelperText>{value}</FormHelperText>
        </FormControl>
      </MuiButtonContainer>
    </>
  );
};
