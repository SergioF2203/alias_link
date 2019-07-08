import React from 'react';
import ListItem from '../../components/listItem';
import NewRow from '../../components/newRow';
import {Grid} from "@material-ui/core";


export default class TableDataContainer extends React.Component {

    maxID = 100;

    path = this.props.location.pathname;

    state = {
        addRow: true,
        isEmpty: true,
        data: [],
        newAlias: "",
        newLink: "",
        id: null,
        path: ""

    };

    allItemsFromStorage() {
        let archive = {},
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            archive[keys[i]] = JSON.parse(window.localStorage.getItem(keys[i]));
        }
        return archive;
    }

    componentWillMount = () => {


        const dataMapping = this.allItemsFromStorage();

        const data = [];

        for (let key in dataMapping) {
            data.push({
                    id: this.maxID++,
                    alias: dataMapping[key].linkObj.alias,
                    link: dataMapping[key].linkObj.link
                }
            )
        }

        this.setState({data: data}, () => this.findLink());

        if (data.length === 0) {
            this.setState({isEmpty: false})
        }
    };

    findLink = () => {
        const alias = (this.props.location.pathname).substr(1);

        this.state.data.map((item) => {
            if (item.alias === alias) {
                window.location.href = item.link;
                this.setState({path: item.link})
            }
        });
    };

    componentWillUnmount() {
        this.unlisten();
    }

    handleEdit = id => {
        this.setState({id: id})
    };

    handleDoneEdit = id => {
        this.setState(({data}) => {
            data.map((item) => {
                if (item.id === id) {
                    console.log(item);
                    console.log(this.state.newLink);
                    if (this.state.newAlias !== "") {
                        item.alias = this.state.newAlias;
                    }
                    if (this.state.newLink !== "") {
                        item.link = this.state.newLink;
                    }
                } else {
                    return item
                }
                console.log(this.state);

            })
        }, () => this.setState({newAlias: "", newLink: ""}, ()=>this.updateLocalstorage()));
        this.handleCancelationEdit();
    };

    handleRemoveItem = id => {
        this.setState(({data}) => {
            const idx = data.findIndex((item) => item.id === id);
            const before = data.slice(0, idx);
            const after = data.slice(idx + 1);
            const newData = [...before, ...after];
            console.log(newData)

            if (newData.length === 0) {
                this.setState({isEmpty: false})
            }

            return {data: newData}
        }, () => this.updateLocalstorage());
    };

    updateLocalstorage = () => {
        window.localStorage.clear();
        this.state.data.map((item) => {
            const linkObj = {alias: item.alias, link: item.link};
            window.localStorage.setItem(item.id, JSON.stringify({linkObj}))
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
        const linkObj = {alias: this.state.newAlias, link: this.state.newLink};
        window.localStorage.setItem(this.maxID, JSON.stringify({linkObj}));
        this.setState({isEmpty: true});
        this.handleCloseAddRow()

    };

    clearAll = () => {
        this.setState({data: [], isEmpty: false});
        window.localStorage.clear();

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