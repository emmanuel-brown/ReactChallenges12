import React from 'react';
import HoverBoardImg from'./images/hoverBoard.jpg';
import HoverCraft from'./images/hoverCraft.jpg';
import Contacts from'./images/contacts.jpeg';
import Tesla from'./images/tesla.jpg';
import SgnlWrist from './images/sgnlWristband.jpg';
import Tap from './images/tap.gif';
import EyeTracker from './images/eyeTracker.jpeg';
import lookingGlass from './images/lookingGlass.jpeg';
import Leap from './images/leapMotion.gif';
import Oled from './images/oled-thin.jpeg';
import translateEarbuds from './images/translateEarbuds.jpg';
import Airselfie from './images/airselfie.jpg';
import Products from './products'

class DoIt extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            defaults: [
                {
                    name: 'Hover Board',
                    price: 7000,
                    description: `compliance vehicle`,
                    image: HoverBoardImg
                },
                {
                    name: 'Lexus Board',
                    price: 10000,
                    description: `compliance vehicle`,
                    image: HoverCraft,
                },
                {
                    name: "Contact Lenses",
                    price: 200,
                    description: `wearable`,
                    image: Contacts,
                },
                {
                    name: "Tesla Model 3",
                    price: `35000`,
                    description: "vehicle",
                    image: Tesla,
                },
                {
                    name: "SGNL Wristband",
                    price: '149',
                    description: "wearable",
                    image: SgnlWrist,
                },
                {
                    name: "Tap Keyboard",
                    price: "199",
                    description: "wearable",
                    image: Tap
                },
                {
                    name: "Tobi Eye Tracker",
                    price: "168",
                    description: "compliance",
                    image: EyeTracker
                },
                {
                    name: "Looking Glass Halographic Display",
                    price: "599", 
                    description: "compliance",
                    image: lookingGlass
                },
                {
                    name: "Leap Motion",
                    price: "80",
                    description: "compliance",
                    image: Leap,
                },
                {
                    name: "Paper-Thin OLED TV",
                    price: "9999",
                    description: "compliance",
                    image: Oled
                },
                {
                    name: "Airselfie Mini Drone",
                    price: "199",
                    description: "compliance",
                    image: Airselfie,
                },
                {
                    name: "Translating Earphones",
                    price: "178",
                    description: "wearable",
                    image: translateEarbuds,
                }
            ],
            display: [],
        }
    }

    componentDidMount(){
        this.AlphaUp();
    }
    PriceDescend = () =>{
        let takeIt = this.state.defaults.sort((a,b) =>{
            return b.price - a.price
        });
        this.setState({
            display: takeIt
        })
    }
    PriceAscend = () =>{
        let takeIt = this.state.defaults.sort((a,b) =>{
            return a.price - b.price
        });
        this.setState({
            display: takeIt
        })
    }

    AlphaUp = () =>{
        let takeIt = this.state.defaults.sort((a,b) =>{
            return a.name.charCodeAt(0) - b.name.charCodeAt(0);
        });
        this.setState({
            display: takeIt
        })
    }

    AlphaDown = () =>{
        let takeIt = this.state.defaults.sort((a,b) =>{
            return b.name.charCodeAt(0) - a.name.charCodeAt(0);
        });
        this.setState({
            display: takeIt
        })
    }

    Cata_compliance = () =>{
        let takeIt = this.state.defaults;
        let pass = [];
        takeIt.map((product) =>{
            if(product.description.includes("compliance")){
                pass.push(product)
            }
        })
        this.setState({
            display: pass,
        })
    }

    Cata_wearable = () =>{
        let takeIt = this.state.defaults;
        let pass = [];
        takeIt.map((product) =>{
            if(product.description.includes("wearable")){
                pass.push(product)
            }
        })
        this.setState({
            display: pass,
        })
    }

    Cata_vehicle = () =>{
        let takeIt = this.state.defaults;
        let pass = [];
        takeIt.map((product) =>{
            if(product.description.includes("vehicle")){
                pass.push(product)
            }
        })
        this.setState({
            display: pass,
        })
    }


    render(){
        console.log(Products)
        let deploy = []
        this.state.display.forEach((product1) =>{
            deploy.push(
                <div key={product1.name} id={product1.name.split(' ').join('')} className="box">
                    <div className="block">
                        <div className="show">
                            <img id="content-img" src={product1.image} alt={product1.name}/>
                        </div>
                        {/* <div id={product1.name.split(' ').join('') + "-img"} style={{backgroundImage: `url("${product1.image}")` }} className="viewer"></div> */}
                        <div className="info">
                            <h3>{product1.name}</h3>
                            <h4>{"$" + product1.price + ".99"}</h4>
                            <h4>{product1.description}</h4>
                        </div>
                    </div>
                </div>
            );
        })
        return(
            <div>
                <div id="filter">
                    <div id="catagory">Filter</div>
                    <div id="catagories">
                        <div id="price" className="contain">
                            <h3>Prices</h3>
                            <div className="options">
                                <div onClick={this.PriceAscend.bind(this)}>Low to high</div>
                                <div onClick={this.PriceDescend.bind(this)}>High to low</div>
                            </div>
                        </div>
                        <div id="alphabet" className="contain">
                            <h3>Alphabetical</h3>
                            <div className="options">
                                <div onClick={this.AlphaUp.bind(this)}>[A-Z]</div>
                                <div onClick={this.AlphaDown.bind(this)}>[Z-A]</div>
                            </div>
                        </div>
                        <div id="types" className="contain">
                            <h3>types</h3>
                            <div className="options">
                                <div onClick={this.Cata_compliance.bind(this)}>compliance</div>
                                <div onClick={this.Cata_wearable.bind(this)}>wearable</div>
                                <div onClick={this.Cata_vehicle.bind(this)}>Vehicle</div>
                            </div>
                        </div>
                    </div>
                </div>
                <main id="content">{deploy}</main>
            </div>
        )
    }
}

export default DoIt