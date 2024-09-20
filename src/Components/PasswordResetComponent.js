import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const PasswordResetComponent = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Reset Password
      </Typography>
      <form>
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>
          Reset Password
        </Button>
      </form>
    </Container>
  );
};

export default PasswordResetComponent;
