import axios from "axios";

export default class {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const data = await axios(
        `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
      );
      this.result = data.data.recipes;
      //console.log(this.result);
    } catch (e) {
      alert(`ERROR FOUND ${e}!`);
    }
  }
}
