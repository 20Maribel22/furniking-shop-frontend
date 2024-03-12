class CartApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getHeaders() {
    const headers = {
      ...this._headers,
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
    return headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  saveCart(orderData) {
    return fetch(`${this._baseUrl}/order`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(orderData),
    }).then((res) => this._handleResponse(res));
  }

  getOrdersAll() {
    return fetch(`${this._baseUrl}/order`, {
      method: "GET",
      headers: this.getHeaders(),
    }).then((res) => this._handleResponse(res));
  }

  getOrder(_id) {
    return fetch(`${this._baseUrl}/order/${_id}`, {
      method: "GET",
      headers: this.getHeaders(),
    }).then((res) => this._handleResponse(res));
  }

  deleteOrder(_id) {
    return fetch(`${this._baseUrl}/order/${_id}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    }).then((res) => this._handleResponse(res));
  }
}

export const cartApi = new CartApi({
  baseUrl: "https://express-furniking-shop.onrender.com",
   // baseUrl: "http://localhost:3001",
  headers: {
    Authorization: "",
    "Content-Type": "application/json",
  },
});
