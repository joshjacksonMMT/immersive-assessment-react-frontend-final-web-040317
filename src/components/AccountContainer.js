import React, { Component } from 'react'

//Components
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'

//Data
import { transactions } from '../transactionsData'


/** Holds the CategorySelector and TransactionList*/
class AccountContainer extends Component
{
  render()
  {
    console.log(transactions)
    return (
      <div className="ui grid container">

        <CategorySelector />

        <TransactionsList />


      </div>
    );
  }
}

export default AccountContainer
