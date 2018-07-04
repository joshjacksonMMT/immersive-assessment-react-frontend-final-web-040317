import React, { Component } from 'react'

//Components
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'

//Data
import { transactions } from '../transactionsData'

//External Functions
import getTransactionData from '../getTransactionData';


/** Holds the CategorySelector and TransactionList*/
class AccountContainer extends Component
{
  constructor(props)
  {
    super(props);

    getTransactionData("https://boiling-brook-94902.herokuapp.com/transactions", (data) =>
    {
      this.setState({ transactionData: data });
    });
  }
  state =
    {
      activeCategory: "All",
      transactionData: null
    };

  changeCategory = (newCategory) =>
  {
    this.setState({ activeCategory: newCategory });
  }

  render()
  {
    return (
      <div className="ui grid container">

        <CategorySelector activeCategory={this.state.activeCategory} changeCategory={this.changeCategory} />


        {/*TODO: Probably replace with nice loading animation whilst data is being loaded*/}
        {this.state.transactionData === null ? <p>Loading Data...</p> :
          <TransactionsList transactionData={this.state.transactionData} activeCategory={this.state.activeCategory} />}

      </div>
    );
  }
}

export default AccountContainer
