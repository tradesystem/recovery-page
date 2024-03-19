export class apiNext {
  static baseURL = "https://apisiacweb.herokuapp.com";

  static async get(url: string, headers?: RequestInit) {
    console.log(this.baseURL, "chamo!!!");
    const response = await fetch(`${this.baseURL}${url}`, {
      ...headers,
      method: "GET",
    });
    const status = await response.status;
    const result = await response.json();

    if (status >= 400) {
      throw {
        response: {
          data: result,
        },
      };
    }
    return { data: result };
  }

  static async post(url: string, data: any,  headers?: RequestInit) {
    console.log(this.baseURL, "chamo!!!");
    const response = await fetch(`${this.baseURL}${url}`, {
      ...headers,
      method: "GET",
    });
    const status = await response.status;
    const result = await response.json();

    if (status >= 400) {
      throw {
        response: {
          data: result,
        },
      };
    }
    return { data: result };
  }

}
