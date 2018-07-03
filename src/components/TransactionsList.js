import React from 'react'

//Components
import Transaction from './Transaction';

const TransactionsList = () =>
{
  /*
    Probably have TransactionsList take a current category prop and then have a renderable
    function in here that will render the right amount of Transaction components ---

    When category is changed, update (somewhere, probably state on a major/category related component) the list to
    only feature objects that have a category that is the same.
  */

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

        <Transaction />

      </tbody>
    </table>
  );
}

export default TransactionsList
