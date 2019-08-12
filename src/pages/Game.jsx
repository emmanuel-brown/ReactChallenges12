import React from 'react'
import Nav from '../components/react2/game/Navbar'
import '../components/react2/game/css/gamer.scss'
import Gameplay from '../components/react2/game/GamePlay'


class Game extends React.Component{
    render(){
        const standardNum = Math.floor((Math.random() * 10) +1)
        const expertNum = Math.floor((Math.random() * 100) +1)
        // console.log(standardNum)
        return(
            <div>
                <Nav />
                <Gameplay standardNum={standardNum} expertNum={expertNum}/>
            </div>
        )
    }
}

export default Game