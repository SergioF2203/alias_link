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
import {TextField} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done'
import CancelIcon from '@material-ui/icons/Cancel';



const ListItemData = props => {
    return (
        <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{margin: 4}}>
                List alias of link
            </Typography>
            <IconButton edge="end" aria-label="Add">
                <AddIcon onClick={props.addRow}/>
            </IconButton>
            <IconButton edge="end" aria-label="Clear" style={{marginLeft: 20}}>
                <DeleteIcon onClick={props.clearAll}/>
            </IconButton>
            <div>
                <List>
                    {props.items.map(row => (
                        <ListItem key={row.id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <LinkIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText hidden={props.editable(row.id)}
                                          primary={row.alias}
                                          secondary={row.link}
                            />
                            <div hidden={!props.editable(row.id)}>
                                <TextField
                                    label={row.alias}
                                    style={{marginBottom: 25}}
                                />
                            </div>
                            <div hidden={!props.editable(row.id)}>
                                <TextField
                                    label={row.link}
                                    style={{marginBottom: 25, marginLeft: 5}}
                                />
                            </div>
                            <ListItemSecondaryAction>
                                <Grid container justify="center">
                                    <div hidden={props.editable(row.id)}>
                                        <IconButton
                                            edge="end"
                                            aria-label="Edit"
                                            style={{marginRight: 2}}
                                            onClick={() => props.handleEdit(row.id)}>
                                            <EditIcon/>
                                        </IconButton>
                                    </div>
                                    <div hidden={!props.editable(row.id)}>
                                        <IconButton

                                            edge="end"
                                            aria-label="Done"
                                            style={{marginRight: 2}}
                                            // onClick={()=>props.handleEdit(row.id)}
                                        >
                                            <DoneIcon/>
                                        </IconButton>
                                    </div>
                                    <div hidden={props.editable(row.id)}>
                                        <IconButton edge="end" aria-label="Delete">
                                            <DeleteIcon/>
                                        </IconButton>
                                    </div>
                                    <div hidden={!props.editable(row.id)}>
                                        <IconButton

                                            edge="end"
                                            aria-label="Cancel"
                                            // style={{marginRight: 2}}
                                            // onClick={()=>props.handleEdit(row.id)}
                                        >
                                            <CancelIcon/>
                                        </IconButton>
                                    </div>
                                </Grid>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Grid>
    )
};

export default ListItemData;