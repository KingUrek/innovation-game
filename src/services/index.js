
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

const getCombo = () => JSON.parse(localStorage.getItem('token'));

exports.getAllLocal = () => {
  const token = this.getToken() || null;
  const combo = getCombo() || null;
  return { token, combo };
};

exports.requestToken = async (token) => {
  const response = await fetch(
    'http://localhost:3001/user/verify',
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    }
  )
  console.log(response)
}

exports.clearToken = () => {
  localStorage.removeItem('token');

}
