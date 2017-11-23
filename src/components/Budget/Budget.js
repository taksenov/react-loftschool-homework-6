import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBudget } from '../../reducers/budget';

import './Budget.css';

export class Budget extends Component {
    render() {
        const { budget } = this.props;
        const total =
            budget.profit -
            budget.marketExpanse -
            budget.farmExpanse -
            budget.deliveryExpanse;

        return (
            <div className="budget">
                <h2>Бюджет</h2>
                <p>Всего получено денег: {budget.profit}</p>
                <p>
                    Расходы продавцов:
                    {budget.marketExpanse !== 0
                        ? `-${budget.marketExpanse}`
                        : budget.marketExpanse}
                </p>
                <p>
                    Расходы на ферме:
                    {budget.farmExpanse !== 0
                        ? `-${budget.farmExpanse}`
                        : budget.farmExpanse}
                </p>
                <p>
                    Расходы на доставку:
                    {budget.deliveryExpanse !== 0
                        ? `-${budget.deliveryExpanse}`
                        : budget.deliveryExpanse}
                </p>
                <p>Итого: {total}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    budget: getBudget(state)
});

export default connect(mapStateToProps, null)(Budget);
