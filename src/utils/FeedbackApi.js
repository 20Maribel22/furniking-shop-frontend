class FeedbackApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  saveFeedback(photo, name, status, comment) {
    return fetch(`${this._baseUrl}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ photo, name, status, comment }),
    }).then((res) => this._handleResponse(res));
  }

  getFeedbackAll() {
    return fetch(`${this._baseUrl}/feedback`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getFeedback(_id) {
    return fetch(`${this._baseUrl}/feedback/${_id}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
}

export const feedbackApi = new FeedbackApi({
  baseUrl: "http://localhost:3001",
  headers: {
    Authorization: "",
    "Content-Type": "application/json",
  },
});
