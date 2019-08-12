import React from 'react';
import Standard from './Standard'

class GamePlay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            standardNum: Math.floor((Math.random() * 10) + 1),
            expertNum: Math.floor((Math.random() * 100) + 1),
            time: 3,
            popup1: false,
            clicked: false,
            standard: false,
            finishedFirstGuess: false,
            modeOn: false,
            gameType: "Choose Your difficulty",
            submit: "",
            input: "",
            highScore: 101,
            guessesInRound: 0,
            guessesTotal: 0,
            eHighScore: 0,
            sHighScore: 0,
            eWins: 0,
            sWins: 0,
            winTotal: 0,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    timer() {
    this.setState({
        time: this.state.time - 1,
        popup1: true
    })
    if(this.state.time < 1) {
        this.setState({
            popup1: false,
            time: 3
        })
            clearInterval(this.intervalId);
        }
    }

    handleInputChange = (e) =>{
        if(Number(e.target.value) || e.target.value === ""){
            this.setState({
                input: e.target.value
            })
        }
    }

    handleSubmit = (e) =>{
        if(this.state.popup1 === false){
            this.intervalId = setInterval(this.timer.bind(this), 1000);
        }
        this.setState({
            popup1: true
        })
        if(this.state.time <= 1){
            this.setState({
                popup1: false
            })
        }
        
        let {input, guessesTotal, winTotal, eWins, sWins, guessesInRound, highScore, finishedFirstGuess, standard, sHighScore, eHighScore} = this.state;
        let number = this.state.standard ? this.state.standardNum : this.state.expertNum
        if (input == number){
            winTotal += 1
            if(guessesInRound < highScore){
                highScore = guessesInRound
                finishedFirstGuess = true
                if(standard){
                    sHighScore = highScore
                } else{
                    eHighScore = highScore
                }
            }
            if(standard){
                sWins += 1;
            } else{
                eWins += 1
            }
            guessesInRound = 0;
        }
        guessesTotal += 1
        guessesInRound += 1
        this.setState({
            submit: input,
            input: '',
            winTotal,
            guessesTotal,
            winTotal,
            guessesInRound,
            highScore,
            finishedFirstGuess,
            sHighScore,
            eHighScore,
            sWins,
            eWins
        })
        e.preventDefault();
    }

    mode = (gameType) =>{
        let {standard} = this.state;
        if(gameType === "Standard"){
            standard = true;
        } else {
            standard = false;
        }
        this.setState({
            modeOn: true,
            gameType,
            standard,
            clicked: true,
        })
    }

    reset = () =>{
        this.setState({
            standardNum: Math.floor((Math.random() * 10) + 1),
            expertNum: Math.floor((Math.random() * 100) + 1),
            guessesInRound: 0,
        })
    }
    render(){
        return(
            <div id="gameplay">
                <section id="difficulty">
                    <div onClick={this.mode.bind(this, "Standard")} className="option">
                        <div className="text">
                            <h2>standard</h2>
                        </div>
                    </div>
                    <div onClick={this.mode.bind(this, "Expert")} className="option">
                        <div className="text">
                            <h2>Expert</h2>
                        </div>
                    </div>
                </section>
                <Standard click={this.state.popup1} input={this.state.submit} clicked={this.state.clicked} number={this.state.standard ? this.state.standardNum : this.state.expertNum} />
                <section id="play">
                    <h2>{this.state.gameType}</h2>
                    {this.state.modeOn ?
                        <form onSubmit={this.handleSubmit}>
                            <input id="guess" type="text" value={this.state.input} onChange={this.handleInputChange} placeholder="Take your guess" />
                            <input type="button" onClick={() => this.reset()} value="reset"/>
                            {this.state.popup1 ? null : <input id="answer" type="submit" value="Answer" />}
                        </form>
                        : null
                    }
                    <h3>Number of guesses: {this.state.guessesTotal}</h3>
                    <h3>Number of guesses per round: {this.state.guessesInRound}</h3>
                    {this.state.finishedFirstGuess ? <h3>High Score: {this.state.standard ? this.state.sHighScore : this.state.eHighScore} in one round</h3> : null}
                    <h3>Number of Wins: {this.state.standard ? this.state.sWins : this.state.eWins}</h3>
                </section>
            </div>
        )
    }
}

export default GamePlay  