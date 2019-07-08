import React from 'react';

import {Redirect} from 'react-router-dom';


export default class RedirectCust extends React.Component {

    findLink = () => {
        this.props.data.map((item, alias) => {
            if (item.alias === '/lo') {
                console.log('done!!!')
            }
        })
    };

    render() {
        console.log(this.props);
        return (
                <Redirect to='/www.google.com'/>
            // <Redirect/>
        )

    }
};

