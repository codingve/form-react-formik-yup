import React from 'react';
import { FormHelperText } from '@material-ui/core';

export function HelperTextError(props) {
  return<FormHelperText  style={{ color: 'red' }} {...props} />;
}