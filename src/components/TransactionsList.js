import React from 'react'

//Components
import Transaction from './Transaction';


/**
 * Takes the transaction data and creates an array of <Transaction /> components that
 * match the active category, or will create a <Transaction /> component for every piece
 * of data if the active category is "All". It will then return the array of components to
 * be rendered within the TransactionsList render() function.
 */
const renderTransactions = (transactionData, activeCategory) =>
{
  let transactionComponents = [];

  for (let i = 0; i < transactionData.length; i++)
  {
    if (activeCategory === "All" || transactionData[i].category === activeCategory)
    {
      transactionComponents.push(<Transaction key={transactionData[i].id} postedAt={transactionData[i].posted_at} description={transactionData[i].description} category={transactionData[i].category} amount={transactionData[i].amount} />);
    }
  }

  return transactionComponents;
}

const TransactionsList = (props) =>
{
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
