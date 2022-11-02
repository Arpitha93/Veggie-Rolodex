import { Component } from "react";

import './cart.style.css';

class Cart extends Component {
    render () {
        return (
            <div className="cart-container" key={id}>
                <img className="veggie_img" src="{`../../images/ veggie ${ name }`}"/>
                <h2>{ name }</h2>
    
            </div>
        )

    }
}

export default Cart;