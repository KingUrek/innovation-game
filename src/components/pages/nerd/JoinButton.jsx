import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routes from '../../../routes/index';

export default function JoinButton() {
  return (
    <Button variant="contained" color="primary" disableElevation>
      <Link style={{ textDecoration: 'none', color: 'white' }} to={routes.payment}>
        Junte-se a nós
      </Link>
    </Button>
  );
}
