import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import LinkIcon from '@material-ui/icons/Link';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';


function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default class TableDataContainer extends React.Component {

    state = {
        data: [
            {
                alias: "goo",
                link: "google.com.ua"
            },
            {
                alias: "stcowfl",
                link: "stackowerflow.com"
            },
            {
                alias: "hbr",
                link: "habr.com"
            }
        ]

    };

    render() {
        return (
            <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{margin: 4}}>
                    List alias of link
                </Typography>
                <IconButton edge="end" aria-label="Add">
                    <AddIcon/>
                </IconButton>
                <div>
                    <List>
                        {this.state.data.map(row=>(
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LinkIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={row.alias}
                                    secondary={row.link}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="Edit" style={{marginRight: 2}}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton edge="end" aria-label="Delete">
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>
        );


    }

}