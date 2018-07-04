



function getTransactionData(url, callback)
{
  fetch(url)
    .then(response =>
    {
      return response.json();
    })
    .then(response =>
    {
      callback(response);
    })
    .catch(err =>
    {
      console.error(err);

      return null;
    })
}


export default getTransactionData;