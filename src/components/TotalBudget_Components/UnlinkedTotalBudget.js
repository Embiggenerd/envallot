import React from 'react';
import '../../index.css';

import { connect } from 'react-redux';

const TotalBudget = props => {
	const TotalExpenses = (
		Math.round(
			100 *
				props.expenses.reduce(function(a, b) {
					return a + b;
				}, 0)
		) / 100
	).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});
	const BudgetGoal = (
		Math.round(
			100 *
				props.budget.reduce(function(a, b) {
					return a + b;
				}, 0)
		) / 100
	).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	console.log('Total expenses', TotalExpenses);
	console.log('Total budget', BudgetGoal);
	return (
		<div className='budget-container'>
			<h3>Budget Summary</h3>
			<div className='budget-showcase'>
				<div className='budget-expenses'>
					<h4>Total Expenses</h4>
					<p>{TotalExpenses}</p>
				</div>
				<div className='budget-goal'>
					<h4>Budget Goal</h4>
					<p>{BudgetGoal}</p>
				</div>
			</div>
			<div>progress bar</div>
		</div>
	);
};
function mapStateToProps(state) {
	return {
		budget: state.plaidReducer.categories.map(
			i => Math.round(100 * i.budget) / 100
		),
		expenses: state.plaidReducer.categories.map(
			i => Math.round(100 * i.total) / 100
		)
	};
}

export default connect(mapStateToProps)(TotalBudget);
