class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
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

  register(name, phone, email, password, isAdmin) {
    return fetch(`${this._baseUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, email, password, isAdmin }),
    }).then((res) => this._handleResponse(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._handleResponse(res));
  }

  getMe() {
    return fetch(`${this._baseUrl}/auth/me`, {
      method: "GET",
      headers: this.getHeaders(),
    }).then((res) => this._handleResponse(res));
  }

  getAllUsers() {
    return fetch(`${this._baseUrl}/users`, {
      method: "GET",
      headers: this.getHeaders(),
    }).then((res) => this._handleResponse(res));
  }
}

export const auth = new Auth({
  baseUrl: "https://express-furniking-shop-8f999c83c8fd.herokuapp.com",
  headers: {
    Authorization: "",
    "Content-Type": "application/json",
  },
});
