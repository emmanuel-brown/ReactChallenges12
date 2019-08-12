import React from 'react'
import PopUp from './PopUp'

const Standard = (props) => {

    let place
    let content = "Please enter a number"
    let popup = "nothing"
    let {input, click, clicked, number} = props
    const contentIt = () =>{
        let content1 = "Please Enter a number"
        if(input > number){
            content1 = "Your too high";
        } else if(input < number){
            
            content1 = "Your too low";
        } else if (input == number){
            content1 = "YOU ARE CORRECT!!!!!"
        }
        content = content1
    }
    if(clicked){
        contentIt()
        if(click && input !==  "" && clicked === true ){
            popup = "PopUp"
            place = <PopUp content={content}/>
        } else{
            place = <div></div>
        }
    }
    return(
        <div id={popup}>
            {place}
        </div>
    )
}


export default Standard

