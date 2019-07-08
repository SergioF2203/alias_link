import React from 'react';
import TableDataContainer from "../containers/tableData";
import {Grid} from "@material-ui/core";

export default function MainPage(props) {
    return(
        <Grid>
            <TableDataContainer {...props}/>
        </Grid>
    )
}