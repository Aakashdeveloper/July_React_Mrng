import React,{Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;