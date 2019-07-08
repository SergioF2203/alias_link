import React from 'react';
import MainPage from './mainPage';
import {Route, Switch} from 'react-router-dom';


function App() {
    return (
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/' render={props => <MainPage {...props}/>}/>
        </Switch>
    );
}

export default App;
