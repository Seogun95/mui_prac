import React, { useState } from 'react';
import {
  Typography,
  Button,
  Divider,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {
  Send,
  Email,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatColorFill,
  ArrowDropDown,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { MuiButtonContainer } from './MuiButtonContainer';
import { MuiButtonVariant } from './MuiButtonVariant';

export const MuiButton = () => {
  const [btnValue, setBtnValue] = useState(false);
  const onClickHandler = () => {
    setBtnValue(prev => !prev);
  };

  const [multipleFormats, setmultipleFormats] = useState(['bold']);
  const [singleFormats, setSingleFormats] = useState('left');

  const handleMultipleFormatChanges = (_e, updatedFormats) =>
    setmultipleFormats(updatedFormats);

  const handleSingleFormatChanges = (_e, updatedFormats) =>
    setSingleFormats(updatedFormats);

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
        <Button variant="contained" endIcon={<Send />}>
          Send
        </Button>
        <Button variant="contained" startIcon={<Send />}>
          Send
        </Button>
        <IconButton aria-label="전송" color="primary">
          <Send />
        </IconButton>
        <IconButton aria-label="이메일" size="large">
          <Email />
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

      {/* 버튼 그룹 */}
      <MuiButtonContainer text={'Button Group 1'}>
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </MuiButtonContainer>

      <MuiButtonContainer text={'Button Group 2'}>
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="large"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </MuiButtonContainer>

      {/* 토글 버튼 */}
      <MuiButtonContainer text={'Multiple Toggle Button'}>
        <ToggleButtonGroup
          aria-label="Multiple toggle button group"
          value={multipleFormats}
          onChange={handleMultipleFormatChanges}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFill />
            <ArrowDropDown />
          </ToggleButton>
        </ToggleButtonGroup>
      </MuiButtonContainer>

      {/* exclusive는 다중 선택이 되지 않게 하는 옵션이다 */}
      <MuiButtonContainer text={'Single Toggle Button'}>
        <ToggleButtonGroup
          aria-label="single toggle button group"
          exclusive
          value={singleFormats}
          onChange={handleSingleFormatChanges}
          size="small"
          color="primary"
          orientation="vertical"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeft />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenter />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRight />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <FormatAlignJustify />
          </ToggleButton>
        </ToggleButtonGroup>
      </MuiButtonContainer>

      <Typography variant="caption">{btnValue}</Typography>
    </>
  );
};
