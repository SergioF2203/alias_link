import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import LinkIcon from '@material-ui/icons/Link';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';




const NewRow = (props) => {
    return(
        <div hidden={props.addRow}>
            <Grid container md={6} justify="center">
                <ListItemAvatar style={{padding: 25}}>
                    <Avatar>
                        <LinkIcon/>
                    </Avatar>
                </ListItemAvatar>
                <Grid item md={2}>
                    <TextField
                        fullWidth
                        id="alias"
                        label="Alias"
                        // className={classes.textField}
                        onChange={props.handleChange('newAlias')}
                        // onChange={handleChange('name')}
                        margin="normal"
                    />
                </Grid>
                <Grid md={6}>
                    <TextField
                        fullWidth
                        style={{marginLeft: 15}}
                        id="link"
                        label="Link"
                        // placeholder={props.clearField}
                        // onChange={props.handleChange('newLink')}
                        // className={classes.textField}

                        onChange={props.handleChange('newLink')}
                        margin="normal"
                    />
                </Grid>
                <Grid style={{paddingTop: 25, marginLeft: 15}}>
                    <IconButton edge="end" aria-label="Edit" style={{marginRight: 2}}>
                        <CancelIcon onClick={props.closeAddRow}/>
                    </IconButton>
                    <IconButton edge="end" aria-label="Delete">
                        <DoneIcon onClick={props.addItem}/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>

    )
};

export default NewRow;