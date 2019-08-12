import React from 'react'
import PopUp from './PopUp'

const Expert = () => {
    console.log(this.props.number)
    let place
    let content
    const contentIt = () =>{
        let content1 = ""
        if(this.props.input > this.props.number){
            content1 = "Your too high";
        } else if(this.props.input < this.props.number){
            content1 = "Your too low";
        } else {
            content1 = "YOU ARE CORRECT!!!!!"
        }
        content = content1
    }
    contentIt()
    if(this.props.click){
        place = <PopUp content={content}/>
    } else{
        place = <div></div>
    }
    return(
        <div id="PopUps">
            {place}
        </div>
    )
}

export default Standard