import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function AddDeviceSpeedDial() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deviceMac, setDeviceMac] = useState('');

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setDeviceMac(''); // Clear input after closing
  };

  const handleSave = () => {
    console.log('Device MAC Address:', deviceMac);
    alert(`Device MAC Address Saved: ${deviceMac}`);
    handleClosePopover();
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ position: 'relative' }}>
      <SpeedDial
        ariaLabel="Add New Device"
        icon={<SpeedDialIcon  openIcon={<AddIcon  />} />}
        onClick={handleOpenPopover}
        className="text-xs scale-75"
       
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: 300 }}>
          <TextField
            fullWidth
            label="Device ID"
            variant="outlined"
            value={deviceMac}
            onChange={(e) => setDeviceMac(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Device Port"
            variant="outlined"
            value={deviceMac}
            onChange={(e) => setDeviceMac(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button variant="outlined" onClick={handleClosePopover}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Create
            </Button>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}
