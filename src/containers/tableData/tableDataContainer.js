import React from 'react';
import LIstItem from '../../components/listItem';


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
            <LIstItem items={this.state.data}/>
        );
    }

}