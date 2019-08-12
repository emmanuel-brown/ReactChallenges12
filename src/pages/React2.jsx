import React from 'react'
import BasicInfo from '../components/react2/BasicInfo'
import '../components/react2/css/info.scss'

class R1app extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            person: [
                {
                    name: "Emmanuel",
                    number: "803-579-8542",
                    DOB: "10/13/01"
                },
                {
                    name: "Jason",
                    number: "345-234-9675",
                    DOB: "01/28/97"
                },
                {
                    name: "Arnaud",
                    number: "2345-543-7457",
                    DOB: "11/16/11"
                },
                {
                    name: "Arely",
                    number: "278-445-3258",
                    DOB: "12/24/99"
                },
                {
                    name: "Biridiana",
                    number: "832-456-2371",
                    DOB: "11/12/87"
                },
                {
                    name: "Connor",
                    number: "684-232-4013",
                    DOB: "5/23/93"
                }
            ]
        }
    }
    
    render(){

        // console.table(thing)
        return(
            <div id="DatGrid">
                {this.state.person.slice().map((person, index) => <BasicInfo key={index} laPersona={person} />)}
            </div>
        )
    }
} 

export default R1app