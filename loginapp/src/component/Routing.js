import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import UserList from './UserList';
import Profile from './Profile';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}></Route>
                <Route exact path="/login" component={LoginComponent}></Route>
                <Route path="/list" component={UserList}></Route>
                <Route path="/profile" component={Profile}></Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing;