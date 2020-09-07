import React, { Component } from "react";
import SignButton from "../SignButton";

class Order extends Component {
  render() {
    return (
      <article>
        <SignButton text="Browse Products" />
        <span>No order has been made yet.</span>
      </article>
    );
  }
}

export default Order;
