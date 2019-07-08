import React from 'react';
import ListItem from '../../components/listItem';
import NewRow from '../../components/newRow';
import {Grid} from "@material-ui/core";


export default class TableDataContainer extends React.Component {

    maxID = 100;

    state = {
        addRow: true,
        data: [
            {
                id: 1,
                alias: "goo",
                link: "google.com.ua"
            },
            {
                id: 2,
                alias: "stcowfl",
                link: "stackowerflow.com"
            },
            {
                id: 3,
                alias: "hbr",
                link: "habr.com"
            }
        ],
        newAlias: "",
        newLink: "",
        id: null

    };

    handleEdit = id => {
        this.setState({id: id})
    };

    isEditable = id => {
        if (id === this.state.id) {
            return true
        }
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
                    id: this.maxID++,
                    alias: this.state.newAlias,
                    link: this.state.newLink
                }
            ]
        }));
        this.handleCloseAddRow()

    };

    clearAll() {
        localStorage.clear();
    }

    handleCloseAddRow = () => {
        this.setState({
            addRow: true,
            newAlias: "",
            newLink: ""
        })
    };

    render() {
        return (
            <Grid>
                <ListItem
                    items={this.state.data}
                    addRow={this.handleAddRow}
                    clearAll={this.clearAll}
                    handleEdit={this.handleEdit}
                    editable={this.isEditable}
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