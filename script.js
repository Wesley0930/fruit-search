const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// TODO
	for (f of fruit) {
		if (str !== '' && f.toLowerCase().includes(str.toLowerCase())){ // set both to lowercase
			results.push(f)
		}
	}
	return results;
}

function searchHandler(e) {
	// TODO
	while (suggestions.children.length !== 0) { // reset suggestions before displaying new ones
		suggestions.firstElementChild.remove()
	} 
	showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {
	// TODO
	if (results){ 
		for (r of results){
			let newSuggestion = document.createElement('li') // append elements into dropdown list
			newSuggestion.innerText = r; 
			newSuggestion.addEventListener('mouseover', () => {
				newSuggestion.style.backgroundColor = 'tomato';
			})
			newSuggestion.addEventListener('mouseout', () => {
				newSuggestion.style.backgroundColor = '';
			})
			suggestions.appendChild(newSuggestion);
		}
	}
}

function useSuggestion(e) {
	// TODO
	input.value = e.target.innerText;
	while (suggestions.children.length !== 0) { // reset suggestions before displaying new ones
		suggestions.firstElementChild.remove()
	} 
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);