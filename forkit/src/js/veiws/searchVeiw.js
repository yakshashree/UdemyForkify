import { element } from "./base";

export const getInput = () => element.searchInput.value;

export const clearUIforResults = () => {
  element.searchInput.value = "";
  element.searchResultList.innerHTML = "";
};

const renderRecipe = (recipes) => {
  const markUp = ` <li>
                    <a class="results__link " href="#${recipes.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipes.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipes.title}</h4>
                            <p class="results__author">${recipes.publisher}</p>
                        </div>
                    </a>
                </li>`;

  element.searchResultList.insertAdjacentHTML("beforeend", markUp);
};

export const recipeResults = (recipes) => {
  recipes.forEach(renderRecipe);
};
