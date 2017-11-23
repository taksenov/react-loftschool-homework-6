import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBudget } from '../../reducers/budget';

import './Budget.css';

export class Budget extends Component {
    render() {
        const { budget } = this.props;

        console.log('budget', budget);

        return (
            <div className="budget">
                <h2>Бюджет</h2>
                <p>Всего получено денег: {111}</p>
                <p>Расходы продавцов: -80</p>
                <p>Расходы на ферме: 0</p>
                <p>Расходы на доставку: 0</p>
                <p>Итого: 441</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    budget: getBudget(state)
});

export default connect(mapStateToProps)(Budget);
