import React from 'react'

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const DonateButton = () => {
  return (
    <Button
      href="https://rzp.io/i/ViLFbVofW"
      variant="contained"
      endIcon={<SendIcon style={{ fontSize: "2rem", marginLeft: "10px" }} />}
      className="btn-btn">
      Donate
    </Button>
  );
}

export default DonateButton
