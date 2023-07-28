const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let lowerInput = str.toLowerCase();
	for (f of fruit) {
		if (f.toLowerCase().includes(lowerInput)){ // set both to lowercase
			results.push(f)
		}
	}
	// use filter method
	return results;
}
	
function searchHandler(e) {
	resetSuggestions();
	if (input.value) {
		showSuggestions(search(input.value), input.value);
	}
}

function showSuggestions(results, inputVal) {
	if (results) { // suggestions are not empty and make sure it's clicking list item
		for (res of results){
			let newSuggestion = document.createElement('li') // append elements into dropdown list
			newSuggestion.innerText = res;
			suggestions.appendChild(newSuggestion);
		}
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	resetSuggestions()
}
/* reset function */
function resetSuggestions(){
	while (suggestions.children.length !== 0) { // reset suggestions before displaying new ones
		suggestions.firstElementChild.remove()
	} 
}

function mouseoverHandler(event){
	// break apart into 3 substrings, before match, match, and after match
	e = event.target;
	const inputVal = input.value.toLowerCase();
	let highlight = e.innerText.toLowerCase().indexOf(inputVal);
	let boldText = e.innerText.substring(0, highlight) + // before
	`<span class="bold-text">${e.innerText.substring(highlight, highlight + inputVal.length)}</span>` + // match 
	e.innerText.substring(highlight + inputVal.length) // rest of string
	e.innerHTML = boldText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', mouseoverHandler);
suggestions.addEventListener('mouseout', (event) => {
	let e = event.target;
	e.innerHTML = e.innerText;
})
