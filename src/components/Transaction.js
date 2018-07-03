import React from 'react'


/*
  Transaction should take its data as props and then load into the table the data
  in the correct order. It shouldn't know anything about other categories, should just
  be a moveable block of data.
*/

const Transaction = () =>
{
  return (
    <tr>
      <td>2017-02-28 11:00:00</td>
      <td>Leather Pants, Gap co.</td>
      <td>Fashion</td>
      <td>-20000</td>
    </tr>
  );
}

export default Transaction
