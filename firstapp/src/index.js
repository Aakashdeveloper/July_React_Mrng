import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const App = () => {
    return (
        <div>
            <Header/>
            <h1>Hi To React App</h1>
            <h2>By NareshiT</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));