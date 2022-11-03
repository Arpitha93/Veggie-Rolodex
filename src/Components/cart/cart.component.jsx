import { Component } from "react";
import Images from './images';
import './cart.style.css';

class Cart extends Component {
    render () {
        return (
            <div className="cart-container" key={id}>
                <img className="veggie_img" src="{`../../images/ veggie ${ Images }`}"/>
                <h2>{  Images / }</h2>
    
            </div>
        )

    }
}

export default Cart;