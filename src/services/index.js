
exports.fetchApi = async ({ endpoint, method, body, headers = { 'Content-Type': 'application/json' } }) => {
  if (method === "GET") {
    const response = await fetch(
      endpoint,
      {
        method,
        headers,
      })
    const data = await response.json();
    return data;
  }
  const response = await fetch(
    endpoint,
    {
      method,
      headers,
      body: JSON.stringify({ ...body }),
    }
  )
  console.log(response)
  const data = await response.json();
  return data;
}


exports.saveToken = (user) => {
  const itemJson = JSON.stringify(user);
  localStorage.setItem('token', itemJson);
}

exports.getToken = () => JSON.parse(localStorage.getItem('token'));

exports.clearToken = () => {
  localStorage.removeItem('token');
}
