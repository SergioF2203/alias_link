import React from 'react';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/Link';



const ListItemData = props => {
    return(
        <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{margin: 4}}>
                List alias of link
            </Typography>
            <IconButton edge="end" aria-label="Add">
                <AddIcon/>
            </IconButton>
            <div>
                <List>
                    {props.items.map(row=>(
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
    )
};

export default ListItemData;