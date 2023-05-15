import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

const FormInput = forwardRef((props, ref) => (
    <TextField
        {...props}
        variant="outlined"
        color="secondary"
        fullWidth
        inputRef={ref}
    />
));

export default FormInput;
