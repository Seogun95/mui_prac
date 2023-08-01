import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// eslint-disable-next-line react/prop-types
export function MuiButtonContainer({ text, children }) {
  return (
    <Stack
      direction="column"
      margin={2}
      divider={<Divider orientation="horizontal" />}
      border={'1px solid'}
      borderRadius={1}
    >
      <Typography fontWeight="bold" padding={2}>
        {text}
      </Typography>
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        padding={2}
        direction="row"
      >
        {children}
      </Stack>
    </Stack>
  );
}
