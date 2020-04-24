import Search from "./models/Search";
import { element } from "./veiws/base";
import * as searchView from "./veiws/searchVeiw";
// import { ContextReplacementPlugin } from "webpack";

// const mySearch = new Search("pasta");

const state = {};

async function controlSearch(query) {
  //1.get the query from veiw
  //   query = "pizza";
  query = searchView.getInput();

  if (query) {
    //add the query to the state
    state.search = new Search(query);
    //3.prepare the UI for results
    searchView.clearUIforResults();

    //4.search for results
    await state.search.getResults();

    //4.render the results on UI
    //console.log(state.search.result);
    searchView.recipeResults(state.search.result);
  }
}

element.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

// mySearch.getResults();
