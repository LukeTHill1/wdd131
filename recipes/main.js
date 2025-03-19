import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;o
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));


function recipeTemplate(recipe) {
	return `<article class="recipe">
			<img class="recipe-image" src="${recipe.imageSRC}" alt="apple crisp with ice cream">
            <div class="tag-row">
                <span class="tag">dessert</span>
            </div>
            <h2>${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
	            <span aria-hidden="true" class="icon-star">⭐</span>
	            <span aria-hidden="true" class="icon-star">⭐</span>
	            <span aria-hidden="true" class="icon-star">⭐</span>
	            <span aria-hidden="true" class="icon-star-empty">⭐</span>
	            <span aria-hidden="true" class="icon-star-empty">☆</span>
            </span>
			<p class="description">${recipe.description}</p>
        </article>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
	tags.map(tag => `<span class="tag">${tag}</span>`);
	// join the array of HTML strings into one string
	const html = tags.join('');
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
	for (let i = 1; i <= 5; i++) {
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} // otherwise
		else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		} 
		// else output an empty star
	}
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}
const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipelist) {
	const recipeHTML = recipeTemplate(recipelist);
	const recipesContainer = document.querySelector('.recipes');
	recipesContainer.innerHTML += recipeHTML;
}

function init() {
	// get a random recipe
	const recipe = getRandomListEntry(recipes)
	// render the recipe with renderRecipes.
	renderRecipes([recipe]);
}
init();

function filter(query) {
	const filtered = recipes.filter(filterFunction)
	// sort by name
	const sortFunction = (a, b) => a.name.localeCompare(b.name)
	const sorted = filtered.sort(sortFunction)
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
	const searchInput = document.querySelector('.search-input');
  // convert the value in the input to lowercase
	const query = searchInput.value.toLowerCase();
  // use the filter function to filter our recipes
	const filtered = filter(query);
  // render the filtered list
	renderRecipes(filtered);
	console.log(filtered);
}