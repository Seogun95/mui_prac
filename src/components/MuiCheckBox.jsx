import React, { useState } from 'react';
import { Man, Woman } from '@mui/icons-material';

import {
  Typography,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  Checkbox,
  Box,
} from '@mui/material';

import { MuiButtonContainer } from './button/MuiButtonContainer';

export const MuiCheckBox = () => {
  const [selectedValue, setSelectedValue] = useState('frontend');
  const [checked, setChecked] = React.useState([true, false]);
  const [multipleChecked, setMultipleChecked] = useState([]);

  const handleChange = e => {
    setSelectedValue(e.target.value);
  };
  const handleChange1 = event => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = event => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = event => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleMultipleChange = e => {
    const index = multipleChecked.indexOf(e.target.value);
    if (index === -1) {
      setMultipleChecked([...multipleChecked, e.target.value]);
    } else {
      setMultipleChecked(
        multipleChecked.filter(skill => skill !== e.target.value),
      );
    }
  };

  return (
    <>
      <Typography variant="h2" fontWeight="bold" margin={2}>
        Check Box
      </Typography>

      <MuiButtonContainer text={'Single CheckBox'}>
        <FormControl>
          <FormControlLabel
            label="프론트엔드 개발자"
            control={
              <Checkbox
                value="frontend"
                checked={selectedValue === 'frontend'}
                onChange={handleChange}
              />
            }
          />
          <FormControlLabel
            label="백앤드 개발자"
            control={
              <Checkbox
                value="backend"
                checked={selectedValue === 'backend'}
                onChange={handleChange}
              />
            }
          />
          <FormControlLabel
            label="풀스택 개발자"
            control={
              <Checkbox
                value="fullstack"
                checked={selectedValue === 'fullstack'}
                onChange={handleChange}
              />
            }
          />
          <FormHelperText>{selectedValue}</FormHelperText>
        </FormControl>
      </MuiButtonContainer>

      <MuiButtonContainer text={'Indeterminate CheckBox'}>
        <Box>
          <Box>
            <FormControlLabel
              label="전체선택"
              control={
                <Checkbox
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />
          </Box>
          <FormControlLabel
            label="남성"
            control={
              <Checkbox
                icon={<Man />}
                checkedIcon={<Man color="success" />}
                checked={checked[0]}
                onChange={handleChange2}
              />
            }
          />
          <FormControlLabel
            label="여성"
            control={
              <Checkbox
                icon={<Woman />}
                checkedIcon={<Woman color="success" />}
                checked={checked[1]}
                onChange={handleChange3}
              />
            }
          />
        </Box>
      </MuiButtonContainer>

      <MuiButtonContainer text={'CheckBox Group'}>
        <Box>
          <FormControl>
            <FormLabel>스킬</FormLabel>
            <FormGroup>
              <FormControlLabel
                label="React"
                control={
                  <Checkbox
                    value="react"
                    checked={multipleChecked.includes('react')}
                    onChange={handleMultipleChange}
                  />
                }
              />
              <FormControlLabel
                label="JS"
                control={
                  <Checkbox
                    value="javascript"
                    checked={multipleChecked.includes('javascript')}
                    onChange={handleMultipleChange}
                  />
                }
              />
              <FormControlLabel
                label="Next"
                control={
                  <Checkbox
                    value="next"
                    checked={multipleChecked.includes('next')}
                    onChange={handleMultipleChange}
                  />
                }
              />
            </FormGroup>
            <FormHelperText>{multipleChecked}</FormHelperText>
          </FormControl>
        </Box>
      </MuiButtonContainer>
    </>
  );
};
