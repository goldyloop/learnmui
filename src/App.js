
import './App.css';
import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { TextField } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'

function CheckboxExemple(){
  const [checked,setChecked]=useState(true)
  return (
    <FormControlLabel
     control={
      <Checkbox
      checked={checked}
      onChange={(e)=>setChecked(e.target.checked)}
      icon={<DeleteIcon/>}
      checkedIcon={<SaveIcon/>}
      inputProps={{
        'aria-label':'secondary checkbox'
      }}
    />}
    label="testing checkbox"
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField variant='filled'
        color='secondary'
        type="time"
        label="the time"
        />
        

        <CheckboxExemple/>
        <ButtonGroup>
          <Button variant="contained" color="primary" startIcon={<SaveIcon />} >
            Save
          </Button>
          <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} >
             Discard
          </Button>
        </ButtonGroup>

      </header>
    </div>
  );
}

export default App;
