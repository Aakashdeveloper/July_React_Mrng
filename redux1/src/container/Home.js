import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../action';
import {bindActionCreators} from 'redux';
import DisplayComponent from '../component/DisplayComponent';


class Home extends Component{

    componentDidMount(){
        this.props.moviesList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }
}

//Help to recive the state from the store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

//TO Dispatch the action
function mapDispatchToProps(dispatch){
    return bindActionCreators({moviesList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)