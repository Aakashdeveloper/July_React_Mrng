import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <h1>Hi To React App</h1>
            <h2>By NareshiT</h2>
            <Footer year="2020" month="July"/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));