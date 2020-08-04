import React ,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews } from '../actions';

class Home extends Component{

    componentDidMount(){
        this.props.dispatch(latestNews())
    }

    render(){
        return(
            <div>
                Home Redux
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)