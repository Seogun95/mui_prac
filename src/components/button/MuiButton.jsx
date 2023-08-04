import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import { MuiButtonContainer } from './MuiButtonContainer';
import { MuiButtonVariant } from './MuiButtonVariant';

export const MuiButton = () => {
  const [btnValue, setBtnValue] = useState(false);
  const onClickHandler = () => {
    setBtnValue(prev => !prev);
  };

  return (
    <>
      <Divider sx={{ marginY: '2rem' }} />

      <MuiButtonContainer text={'Basic Button'}>
        <MuiButtonVariant variant={'contained'} />
      </MuiButtonContainer>

      <MuiButtonContainer text={'Outlined Button'}>
        <MuiButtonVariant variant={'outlined'} />
      </MuiButtonContainer>

      <MuiButtonContainer text={'Default Button'}>
        <MuiButtonVariant />
      </MuiButtonContainer>

      <MuiButtonContainer text={'Button Size'}>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </MuiButtonContainer>

      <MuiButtonContainer text={'Icon Button'}>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="전송" color="primary">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="이메일" size="large">
          <EmailIcon />
        </IconButton>
      </MuiButtonContainer>

      {/* disableElevation : 물결효과 */}
      <MuiButtonContainer text={'disabled Button'}>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" disableElevation>
          Disable Elevation
        </Button>
        <Button variant="contained" disableRipple>
          Disable Ripple
        </Button>
      </MuiButtonContainer>

      {/* 커스텀 버튼 */}
      <MuiButtonContainer text={'Custom Button'}>
        <Button
          sx={{
            p: 2,
            border: 5,
            borderColor: 'error.light',
          }}
          variant="contained"
        >
          Button
        </Button>

        {/* 배열을 통한 조건부 스타일링 및 반응형 */}
        <Button
          onClick={onClickHandler}
          sx={[
            {
              width: {
                xs: 100, // theme.breakpoints.up('xs')
                sm: 200, // theme.breakpoints.up('sm')
                md: 300, // theme.breakpoints.up('md')
                lg: 400, // theme.breakpoints.up('lg')
                xl: 500, // theme.breakpoints.up('xl')
              },
              borderColor: 'error.light',
              p: 1,
            },
            btnValue && {
              height: '30px',
              bgcolor: 'error.main',
              color: 'white',
            },
          ]}
          variant="outlined"
        >
          Button2
        </Button>
      </MuiButtonContainer>

      <Typography variant="caption">{btnValue}</Typography>
    </>
  );
};
