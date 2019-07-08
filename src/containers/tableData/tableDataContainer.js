import React from 'react';
import ListItem from '../../components/listItem';
import NewRow from '../../components/newRow';
import {Grid} from "@material-ui/core";


export default class TableDataContainer extends React.Component {

    maxID = 100;

    state = {
        addRow: true,
        isEmpty: true,
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

    handleDoneEdit = id => {
        console.log(id);
        this.setState(({data}) => {
            console.log(data);
            data.map((item, index) => {
                if (index === id - 1) {
                    if (this.state.newAlias !== "") {
                        item.alias = this.state.newAlias;
                    } else if (this.state.newLink !== "") {
                        item.link = this.state.newLink;
                    }
                } else {
                    return item
                }
            })
        }, () => this.setState({newAlias: "", newLink: ""}));
        this.handleCancelationEdit();
    };

    handleRemoveItem = id => {
        this.setState(({data}) => {
            const idx = data.findIndex((item) => item.id === id);
            const before = data.slice(0, idx);
            const after = data.slice(idx + 1);
            const newData = [...before, ...after];
            console.log(newData)

            if(newData.length === 0){
                this.setState({isEmpty: false})
            }

            return {data: newData}
        });


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

    clearAll = () => {
        this.setState({data: [], isEmpty: false});
    };

    handleCloseAddRow = () => {
        this.setState({
            addRow: true,
            newAlias: "",
            newLink: ""
        })
    };

    handleCancelationEdit = () => {
        this.setState({id: null})
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
                    handleCancelation={this.handleCancelationEdit}
                    handleChange={this.handleInput}
                    handleDone={this.handleDoneEdit}
                    handleRemove={this.handleRemoveItem}
                    isEmpty={this.state.isEmpty}

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