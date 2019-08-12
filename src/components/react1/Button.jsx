import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            status: false
        }
    }
    
    change = () =>{
        if(this.state.status){
            this.setState({
                status: false
            })
        } else {
            this.setState({
                status: true
            })
        }
    }

    render(){
        let color
        if(this.state.status){
            color = "null"
        } else {
            color = "status"
        }
        console.log(this.state.status)
        return(
            <button key={this.props.key} onClick={this.change.bind(this)} className={color}></button>
        );
    }
}

export default Button