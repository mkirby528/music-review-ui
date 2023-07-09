import * as React from 'react';
import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import { Link } from "react-router-dom";
import "./index.css"

export default function AvatarDropdownMenu() {
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='dropdown-container'>

      <Button
        ref={buttonRef}
        id="basic-demo-button"
        aria-controls={'basic-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}

        color="blac"
        onMouseEnter={() => {
          setOpen(!open);
        }}
      >
        <img src="avatar.png" className='avatar-image' alt="avatar" />

      </Button>

      <Menu
        id="basic-menu"
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
      >
        <MenuItem className="menu-link" component={Link} to={'/'} onClick={handleClose}>
          <i className="icon-link fa-solid fa-home"></i>
          Home
        </MenuItem>

        <MenuItem className="menu-link" component={Link} to={'/add'} onClick={handleClose}>
          <i className="icon-link fa-solid fa-circle-plus"></i>
          Add Review
        </MenuItem>
        <MenuItem className="menu-link" component={Link} to={'/stats'} onClick={handleClose}>
          <i className="icon-link fa-solid fa-chart-line"></i>
          Stats
        </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

    </div>
  );
}