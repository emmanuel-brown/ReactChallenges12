import React from 'react';
// import Buttons from './Button'


class Easy extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            status: false
        }
    }
    change(){
        if(this.state.status){
            this.setState({
                status: false
            })
        } else{
            this.setState({
                status: true
            })
        }
    }
    render(){

        
        
    //     let contactList = this.props.contact.map((contacts =>{
    //     return(
    //         <div key={contacts.firstName}>
    //             <div style={{display: 'flex'}}>
    //                 <div>
    //                     <h2>You need to contact {contacts.firstName} {contacts.lastName} at {contacts.phoneNumber}.</h2>
    //                 </div>
    //                 {/* <Buttons status={this.props.status} key={contacts.firstName}/> */}
    //                 <button onClick={this.props.change}/>
    //             </div>
    //         </div>
    //     )
    // }))

        return(
            <div>
                <div key={this.props.firstName}>
                    <div style={{display: 'flex'}}>
                        <div>
                            <h2>You need to contact {this.props.firstName} {this.props.lastName} at {this.props.phoneNumber}.</h2>
                        </div>
                        {/* <Buttons status={this.props.status} key={contacts.firstName}/> */}
                        <button onClick={this.props.change} className={this.props.status ? "status" : "null"}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Easy;

