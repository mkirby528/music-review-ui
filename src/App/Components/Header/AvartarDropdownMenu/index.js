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
        <MenuItem onClick={handleClose}> <Link className="menu-link" to="/">
          <i className="icon-link fa-solid fa-home"></i>
          Home

        </Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link className="menu-link" to="/stats">
          <i className="icon-link fa-solid fa-chart-line"></i>
          Stats

        </Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link className="menu-link" to="/add">
          <i className="icon-link fa-solid fa-circle-plus"></i>
          Add Review

        </Link></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

    </div>
  );
}