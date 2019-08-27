export default class Service {
  static checkResponse(response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }
}
