import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Input,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  IconButton,
  Box,
} from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material';
import { MuiButtonContainer } from './button/MuiButtonContainer';

/**
 * -----------------------------
 *	TextField
 * -----------------------------
 *
 * TextField는 기본적으로 label 속성에 값을 넣으면 placeholder와 같이 레이블이 생성된다.
 * variant를 통해 textfield의 스타일을 지정할 수 있다.
 * InputAdornment를 사용하면, 텍스트필드 앞, 또는 뒤에 원하는 문구를 삽입할 수 있다.
 *
 */

export const MuiTextField = () => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleOnChange = e => setValue(e.target.value);

  return (
    <>
      <Typography variant="h2" fontWeight="bold" margin={2}>
        TextField
      </Typography>
      <MuiButtonContainer text={'TextField'}>
        <TextField label="이름" variant="filled" />
        <TextField label="나이" variant="outlined" />
        <TextField label="지역" variant="standard" />
      </MuiButtonContainer>

      <MuiButtonContainer text={'TextField options'}>
        <TextField label="필수 항복" required />
        <TextField
          label="helperText"
          helperText="textField 아래에 문구를 추가할 수 있습니다."
        />
        <TextField
          label="비밀번호"
          required
          type="password"
          helperText="비밀번호를 입력해주세요"
        />
        <TextField
          label="읽기 전용"
          color="error"
          helperText="편집이 불가능 합니다"
          InputProps={{ readOnly: true }}
        />
      </MuiButtonContainer>

      <MuiButtonContainer text={'TextField InputAdornment'}>
        <TextField
          variant="outlined"
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          variant="outlined"
          label="Weight"
          placeholder="kg을 입력해주세요"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </MuiButtonContainer>

      <MuiButtonContainer text={'TextField Validation Msg'}>
        <TextField
          value={value}
          onChange={handleOnChange}
          label="이름"
          placeholder="이름을 입력해주세요"
          required
          error={!value}
          helperText={value ? `${value}` : '필수 입력 사항입니다.'}
        />

        <FormControl fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment" textAlign="left">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </MuiButtonContainer>
    </>
  );
};
