//Get Initial State
//set initial state
//before get created
//Render
//after get created
//unmount

import React, {Component} from 'react';

class LifeCycle extends Component{
    
    //1 Get Initial State
    constructor(props){
        super(props)
        console.log(">>>>>>Inside constructor")  

        //2 set initial state
        this.state={
            title:'React App'
        }
    }

    //componentWillUpdate
    componentWillUpdate(){
        console.log('inside componentWillUpdate')
    }
    //componentDidUpdate
    componentDidUpdate(){
        console.log('inside componentDidUpdate') 
    }

    //3 before get created
    componentWillMount(){
        console.log('inside componentWillMount')
    }

    //shouldComponentUpdate
    shouldComponentUpdate(nextProps,nextState){
        console.log('inside shouldComponentUpdate')
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }
    //4 Render
    render(){
        console.log(">>>>>>Inside Render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}>
                    Click Me
                </div>
            </div>
            

        )
    }

    //5 After Get Created
    componentDidMount(){
        console.log('inside componentDidMount')
    }

    //6 unmount
    componentWillUnmount(){
        alert('Do You Want to Leave?')
    }

}

export default LifeCycle;