class ProductsApi {
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

  getProductsAll() {
    return fetch(`${this._baseUrl}/all`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getProductAll(_id) {
    return fetch(`${this._baseUrl}/all/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  addProduct(
    category,
    status,
    name,
    title,
    price,
    oldPrice,
    countInStock,
    url,
    image,
    text
  ) {
    return fetch(`${this._baseUrl}/all`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({
        category,
        status,
        name,
        title,
        price,
        oldPrice,
        countInStock,
        url,
        image,
        text,
      }),
    }).then((res) => this._handleResponse(res));
  }

  updateProduct(_id, { status, price, oldPrice, countInStock, text }) {
    return fetch(`${this._baseUrl}/all/${_id}`, {
      method: "PATCH",
      headers: this.getHeaders(),
      body: JSON.stringify({
        status: status,
        price: price,
        oldPrice: oldPrice,
        countInStock: countInStock,
        text: text,
      }),
    }).then((res) => this._handleResponse(res));
  }

  deleteProduct(_id) {
    return fetch(`${this._baseUrl}/all/${_id}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    }).then((res) => this._handleResponse(res));
  }

  getProductsTop() {
    return fetch(`${this._baseUrl}/products`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getProductsNew() {
    return fetch(`${this._baseUrl}/new-arrivals`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getProductNew(_id) {
    return fetch(`${this._baseUrl}/new-arrivals/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getProductsSale() {
    return fetch(`${this._baseUrl}/hot-sale`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getProductSale(_id) {
    return fetch(`${this._baseUrl}/hot-sale/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getProductsBest() {
    return fetch(`${this._baseUrl}/best-sellers`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getProductBest(_id) {
    return fetch(`${this._baseUrl}/best-sellers/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getChairs() {
    return fetch(`${this._baseUrl}/chairs`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getChair(_id) {
    return fetch(`${this._baseUrl}/chairs/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getWardrobes() {
    return fetch(`${this._baseUrl}/wardrobes`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getWardrobe(_id) {
    return fetch(`${this._baseUrl}/wardrobes/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getTables() {
    return fetch(`${this._baseUrl}/tables`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getTable(_id) {
    return fetch(`${this._baseUrl}/tables/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getSofas() {
    return fetch(`${this._baseUrl}/sofas`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getSofa(_id) {
    return fetch(`${this._baseUrl}/sofas/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getMirrors() {
    return fetch(`${this._baseUrl}/mirrors`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getMirror(_id) {
    return fetch(`${this._baseUrl}/mirrors/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getStools() {
    return fetch(`${this._baseUrl}/stools`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getStool(_id) {
    return fetch(`${this._baseUrl}/stools/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getBenches() {
    return fetch(`${this._baseUrl}/benches`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getBench(_id) {
    return fetch(`${this._baseUrl}/benches/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
}

export const productsApi = new ProductsApi({
  baseUrl: "https://express-furniking-shop-8f999c83c8fd.herokuapp.com",
  headers: {
    Authorization: "",
    "Content-Type": "application/json",
  },
});
