import React from 'react'

//Components
import Transaction from './Transaction';


const renderTransactions = (transactionData, activeCategory) =>
{
  /*TODO: Loop through the data and create a <Transaction /> component for every
  object of data within the transactionData prop that matches the activeCategory prop. */

  let transactionComponents = [];

  for (let i = 0; i < transactionData.length; i++)
  {
    if (transactionData[i].category === activeCategory)
    {
      transactionComponents.push(<Transaction )
    }
  }

}

const TransactionsList = (props) =>
{
  /*
    Probably have TransactionsList take a current category prop and then have a renderable
    function in here that will render the right amount of Transaction components ---

    When category is changed, update (somewhere, probably state on a major/category related component) the list to
    only feature objects that have a category that is the same.
  */

  const { transactionData, activeCategory } = props;

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {renderTransactions(transactionData, activeCategory)}

      </tbody>
    </table>
  );
}

export default TransactionsList
