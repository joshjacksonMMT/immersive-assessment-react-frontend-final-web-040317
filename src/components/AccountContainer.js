import React, { Component } from 'react'

//Components
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'

//Data
import { transactions } from '../transactionsData'


/** Holds the CategorySelector and TransactionList*/
class AccountContainer extends Component
{
  state =
    {
      activeCategory: "All"
    };

  changeCategory = (newCategory) =>
  {
    this.setState({ activeCategory: newCategory });
  }

  render()
  {
    return (
      <div className="ui grid container">

        <h1>{this.state.activeCategory}</h1>

        <CategorySelector activeCategory={this.state.activeCategory} changeCategory={this.changeCategory} />

        <TransactionsList transactionData={transactions} activeCategory={this.state.activeCategory} />

      </div>
    );
  }
}

export default AccountContainer
