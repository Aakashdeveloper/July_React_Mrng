import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';

class Home extends Component {

    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    render(){
        console.log(this.state.news)
        return (
            <React.Fragment>
                <Header/>
                <h1>Hi To React App</h1>
                <h2>By NareshiT</h2>
                <Footer year="2020" month="July"/>
            </React.Fragment>
        )
    }
}

export default Home;
