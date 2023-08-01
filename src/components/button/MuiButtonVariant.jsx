import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
export function MuiButtonVariant({ variant }) {
  return (
    <>
      <Button variant={variant}>Primary</Button>
      <Button variant={variant} color="secondary">
        Secondary
      </Button>
      <Button variant={variant} color="info">
        Info
      </Button>
      <Button variant={variant} color="success">
        Success
      </Button>
      <Button variant={variant} color="warning">
        Warning
      </Button>
      <Button variant={variant} color="error">
        Error
      </Button>
    </>
  );
}
