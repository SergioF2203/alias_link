import React from 'react';
import ListItem from '../../components/listItem';
import NewRow from '../../components/newRow';
import {Grid} from "@material-ui/core";


export default class TableDataContainer extends React.Component {

    state = {
        addRow: true,
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

    handleAddRow = () => {
        this.setState({addRow: false})

    };

    handleCloseAddRow = () => {
        this.setState({addRow: true})
    }

    render() {
        return (
            <Grid>
                <ListItem
                    items={this.state.data}
                    addRow={this.handleAddRow}
                />
                <NewRow
                    addRow={this.state.addRow}
                    closeAddRow={this.handleCloseAddRow}
                />
            </Grid>
        );
    }

}