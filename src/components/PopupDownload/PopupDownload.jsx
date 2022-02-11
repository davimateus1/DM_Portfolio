import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { BsDownload } from "react-icons/bs";

import { useState } from "react";
import { buttonPopUpStyle, buttonStyle, style } from "./styles";

const PopupDownload = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={buttonStyle}>
        <BsDownload /> Download CV
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Versão em Português
            </Typography>
            <Button onClick={handleOpen} style={buttonPopUpStyle}>
              Download
            </Button>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Versão em Inglês
            </Typography>
            <Button onClick={handleOpen} style={buttonPopUpStyle}>
              Download
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PopupDownload;
