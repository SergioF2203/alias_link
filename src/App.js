import React from 'react';
import Button from '@material-ui/core/Button';
import TableDataContainer from './containers/tableData';
import TempData from './containers/tempTable/tempData';
import {Grid} from "@material-ui/core";


function App() {
  return (
      <Grid>
        {/*<TempData/>*/}
        <TableDataContainer/>
      </Grid>

  );
}

export default App;
