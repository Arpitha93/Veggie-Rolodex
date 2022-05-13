import React, { Component } from "react";

import '../../images/potato.jpg';
import './cart-list.style.css';


class CartList extends Component {
    render() {
        console.log('render cartlist')
        const { veggies } = this.props;

        return (
            <div className="cart-list" >
                { veggies.map((veggie) => {
                    const {name, id} = veggie;
                    return(
                    <div className="cart-container" key={id}>
                        <img className="veggie_img" src="{`../../images/ veggie ${ name }`}"/>
                        <h2>{ name }</h2>

                    </div>
                )})}
            </div>)
    }
}

export default CartList;