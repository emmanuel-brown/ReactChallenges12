import React from 'react';
import '../components/react1/css/normalize.css';
import '../components/react1/css/product.scss';
import Order from '../components/react1/Order2';



class Product extends React.Component{
    google(){
        window.location = 'home';
    }
    render(){
        return(
            <div>
                <nav id="navigation">
                    <div id="title">
                        <h1>Future Fancy</h1>
                    </div>
                    <div id="navigator">
                        <div><p onClick={this.google.bind(this)}>Home</p></div>
                        <div><p><a href="./product.html">Product</a></p></div>
                        <div><p><a href="./contact.html">Contact</a></p></div>
                    </div>
                </nav>
                <Order/>
            </div>
        )
    }
}

export default Product