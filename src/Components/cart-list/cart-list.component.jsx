import React, { Component } from "react";

class CartList extends Component {
    render() {
        console.log('render cartlist')
        const { veggies } = this.props;

        return (
            <div>
                { veggies.map(veggie => (
                    <h1>{ veggie.name }</h1>
                ))}
            </div>)
    }
}

export default CartList;