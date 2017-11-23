import React, { Component } from 'react';
import './Order.css';

export class Order extends Component {
    render() {
        const { order } = this.props;

        return (
            <div className="order">
                <div className="order__upper">
                    <p className="p--order">Название: {order.name}</p>
                    <p className="p--order">Цена: {order.price}</p>
                </div>
                <div className="order__lower">
                    <p className="p--order">
                        Создан: {order.createdAt.toDateString()}
                    </p>
                </div>
            </div>
        );
    }
}

export default Order;
