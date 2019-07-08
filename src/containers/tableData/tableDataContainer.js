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
        ],
        newAlias: "",
        newLink: ""

    };

    handleAddRow = () => {
        this.setState({addRow: false})

    };

    handleInput = name => event => {
        // const value = event.target.value;
        this.setState({[name]: event.target.value})
    };

    handleAddItem = () => {

        this.setState(prevState => ({
            data: [
                ...prevState.data,
                {
                    alias: this.state.newAlias,
                    link: this.state.newLink
                }
            ]
        }))
        this.handleCloseAddRow();

    };

    updateArray(newItem) {
        this.setState(prevState => ({data: [...prevState.data, newItem]}))
    }

    handleCloseAddRow = () => {
        this.setState({addRow: true})
    };

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
                    addItem={this.handleAddItem}
                    handleChange={this.handleInput}
                />
            </Grid>
        );
    }

}