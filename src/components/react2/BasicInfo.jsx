import React from 'react'

function BasicInfo (props){
    return(
        <div className="box">
            <div className="text">
                <h1>{props.laPersona.name}</h1>
                <h2>{props.laPersona.number}</h2>
                <h3>{props.laPersona.DOB}</h3>
            </div>
        </div>
    )
} 

export default BasicInfo