import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MuiSelect() {
  const [SelectCategory, setSelectCategory] = React.useState('');

  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width:'140px', height:'70px', marginLeft:'30px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={SelectCategory}
          label="카테고리"
          onChange={handleChange}
        >
          <MenuItem value={10}>새참 먹자</MenuItem>
          <MenuItem value={20}>품앗이</MenuItem>
          <MenuItem value={30}>고민 토론</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
