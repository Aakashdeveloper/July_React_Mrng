import React,{Component} from 'react';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'My React App'
        }
    }
   
    render(){
        return (
            <React.Fragment>
                <center>
                    <h1>{this.state.title}</h1>
                </center>
                <hr/>
            </React.Fragment>
           
        )
    }
}

export default Header;
/*const Header = () => {
    return (
        <React.Fragment>
            <center>
                <h1>React App</h1>
            </center>
            <hr/>
        </React.Fragment>
    )
}
*/