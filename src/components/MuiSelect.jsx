import React, { useState } from 'react';
import { TextField, Typography, MenuItem } from '@mui/material';
import { MuiButtonContainer } from './button/MuiButtonContainer';

/**
 * -----------------------------
 *
 * -----------------------------
 * 사용자가 "KO,US,RU"와 같이 여러 개의 옵션을 선택한 경우 e.target.value는 "KO,US,RU"와 같은 문자열이 됩니다.
 * 따라서 v.split(',')은 사용자가 선택한 여러 개의 옵션들을 쉼표(,)를 기준으로 분리하여 배열로 변환하는 작업을 수행하는 것입니다. 이렇게 변환된 배열은 setCountries를 통해 countries 상태로 업데이트되며,
 * 이를 통해 사용자가 선택한 여러 개의 옵션들이 저장되고 표시되게 됩니다.
 *
 */

export const MuiSelect = () => {
  const [country, setCountry] = useState('KO');
  const [countries, setCountries] = useState(['KO']);
  const handleChangeCountry = e => {
    setCountry(e.target.value);
  };

  const handleChangeCountries = e => {
    const v = e.target.value;
    setCountries(typeof v === 'string' ? v.split(',') : v);
  };

  return (
    <>
      <Typography variant="h2" fontWeight="bold" margin={2}>
        Select Box
      </Typography>

      <MuiButtonContainer text={'SelectBox'}>
        <TextField
          label="Choice Country"
          select
          required
          value={country}
          onChange={handleChangeCountry}
          helperText={country ?? country}
          sx={{ width: '50%' }}
        >
          <MenuItem value="KO">🇰🇷 KOREA</MenuItem>
          <MenuItem value="US">🇺🇸 USA</MenuItem>
          <MenuItem value="RU">🇷🇺 RUSSIA</MenuItem>
        </TextField>

        {/* 다중 선택 */}
        <TextField
          label="Multiple Select Box"
          select
          value={countries}
          onChange={handleChangeCountries}
          SelectProps={{ multiple: true }}
          color="primary"
          size="small"
          sx={{ width: '50%' }}
        >
          <MenuItem value="KO">🇰🇷 KOREA</MenuItem>
          <MenuItem value="US">🇺🇸 USA</MenuItem>
          <MenuItem value="RU">🇷🇺 RUSSIA</MenuItem>
        </TextField>
      </MuiButtonContainer>
    </>
  );
};
