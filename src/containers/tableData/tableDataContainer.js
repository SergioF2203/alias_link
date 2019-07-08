import React from 'react';
import ListItem from '../../components/listItem';
import NewRow from '../../components/newRow';
import {Grid} from "@material-ui/core";
// import Redirect from '../../components/redirect';
import {Redirect} from 'react-router-dom';


export default class TableDataContainer extends React.Component {

    maxID = 100;

    path = this.props.location.pathname;

    state = {
        addRow: true,
        isEmpty: true,
        data: [
            // {
            //     id: 1,
            //     alias: "goo",
            //     link: "https://google.com.ua"
            // },
            // {
            //     id: 2,
            //     alias: "stcowfl",
            //     link: "http://stackowerflow.com"
            // },
            // {
            //     id: 3,
            //     alias: "hbr",
            //     link: "http://habr.com"
            // }
        ],
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

        this.setState({data: data});

        if(data.length===0){
            this.setState({isEmpty: false})
        }

        const alias = (this.props.location.pathname).substr(1);

        console.log((this.props.location.pathname).substr(1));
        console.log(alias);

        this.state.data.map((item) => {
            console.log(item);

            if (item.alias === alias) {
                window.location.href = item.link;
                this.setState({path: item.link})
            }
        });
        console.log(this.state);
        console.log(this.props)
    };

    componentWillUnmount() {
        this.unlisten();
    }

    handleEdit = id => {
        this.setState({id: id})
    };

    handleDoneEdit = id => {
        this.setState(({data}) => {
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

            if (newData.length === 0) {
                this.setState({isEmpty: false})
            }

            return {data: newData}
        },()=>{
            window.localStorage.clear();
            this.state.data.map((item) => {
                const linkObj = {alias: item.alias, link: item.link}
                window.localStorage.setItem(item.id, JSON.stringify({linkObj}))
            });
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
                {/*<Redirect to={this.state.path}/>*/}
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
                {/*<Redirect*/}
                {/*    data={this.state.data}*/}
                {/*    path={this.path}*/}
                {/*/>*/}
            </Grid>
        );
    }

}