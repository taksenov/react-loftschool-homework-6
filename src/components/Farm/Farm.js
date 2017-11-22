import React, { Component } from 'react';
import './Farm.css';

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

export class Farm extends Component {
    render() {
        return (
            <div className="farm">
                <h2>Производство на ферме</h2>
                <button disabled="">Отправить урожай клиенту</button>
                <div />
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
