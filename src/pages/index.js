import React from 'react';
import VeryEasy from '../components/react1/VeryEasy';
import EasyM from '../components/react1/Easy';
import '../components/react1/css/status.scss';
import Products from '../components/react1/products'




class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contacts: Products
        }
    } 
    
    change = (contactIndex) =>{
        const contacts = [...this.state.contacts];
        contacts[contactIndex].status = !contacts[contactIndex].status 
        this.setState({
            contacts: contacts
        })
        console.table(contacts)
    }
    
    render(){
        let contactList = this.state.contacts.map((contacts, index) =>{
            return(
                <EasyM
                    firstName={contacts.firstName}
                    lastName={contacts.lastName}
                    phoneNumber={contacts.phoneNumber}
                    change={this.change.bind(this, index)}
                    status={contacts.status}
                />
            )
        }, this)
        return(
            <div>
                <VeryEasy name="Emmanuel" lastName="brown"/>
                {contactList}
            </div>
        );
    }
}

export default Index