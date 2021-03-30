export const fetchOrders = async (value) => {
  let baseUrl = 'http://localhost:8080/api/order'
  if(value) {
    baseUrl += '?filter=' + value
  }
  return await fetch(baseUrl).then(response => response.json())
}

export const fetchPositions = async (id) => {
  let baseUrl = `http://localhost:8080/api/order/${id}`
  return await fetch(baseUrl).then(response => response.json())
}