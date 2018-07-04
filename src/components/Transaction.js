import React from 'react'


/** 
  Transaction should take its data as props and then load into the table the data
  in the correct order.It shouldn't know anything about other categories, should just
  be a moveable block of data.
*/
const Transaction = (props) =>
{
  const { postedAt, description, category, amount } = props;

  return (
    <tr>
      <td>{postedAt}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction
