import React, { Component } from 'react';
import './Order.css';

export class Order extends Component {
    render() {
        return (
            <div className="market">
                <h2>Новые заказы в магазине</h2>
                <button className="new-orders__create-button">
                    Создать заказ
                </button>
                <button disabled="">Отправить заказ на ферму</button>
                <div className="order-list">
                    <div className="order">
                        <div className="order__upper">
                            <p className="p--order">Название: Чеснок</p>
                            <p className="p--order">Цена: 183</p>
                        </div>
                        <div className="order__lower">
                            <p className="p--order">
                                Создан: 15:38:18 GMT+0500 (RTZ 4 (зима))
                            </p>
                        </div>
                    </div>
                    <div className="order">
                        <div className="order__upper">
                            <p className="p--order">Название: Горох</p>
                            <p className="p--order">Цена: 103</p>
                        </div>
                        <div className="order__lower">
                            <p className="p--order">
                                Создан: 15:38:18 GMT+0500 (RTZ 4 (зима))
                            </p>
                        </div>
                    </div>
                    <div className="order">
                        <div className="order__upper">
                            <p className="p--order">Название: Огурцы</p>
                            <p className="p--order">Цена: 129</p>
                        </div>
                        <div className="order__lower">
                            <p className="p--order">
                                Создан: 15:38:18 GMT+0500 (RTZ 4 (зима))
                            </p>
                        </div>
                    </div>
                    <div className="order">
                        <div className="order__upper">
                            <p className="p--order">Название: Чеснок</p>
                            <p className="p--order">Цена: 168</p>
                        </div>
                        <div className="order__lower">
                            <p className="p--order">
                                Создан: 15:38:18 GMT+0500 (RTZ 4 (зима))
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
