import React, { Component } from 'react';
import './Budget.css';

import { connect } from 'react-redux';
let id = 0;
const getId = () => {
    id += 1;
    return id;
};
export const vegetables = [
    'Капуста',
    'Редиска',
    'Огурцы',
    'Морковь',
    'Горох',
    'Баклажан',
    'Тыква',
    'Чеснок',
    'Лук',
    'Перец',
    'Картофель',
    'Редька'
];

const getNewOrder = () => {
    return {
        id: getId(),
        name: vegetables[Math.floor(Math.random() * vegetables.length)],
        price: 100 + Math.floor(Math.random() * 100),
        createdAt: new Date()
    };
};

export class Budget extends Component {
    render() {
        return (
            <div className="budget">
                <h2>Бюджет</h2>
                <p>Всего получено денег: 521</p>
                <p>Расходы продавцов: -80</p>
                <p>Расходы на ферме: 0</p>
                <p>Расходы на доставку: 0</p>
                <p>Итого: 441</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
