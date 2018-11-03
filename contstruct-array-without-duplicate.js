
let numbers = [10, 20, 20, 40, 10, 60, 60, 80, 70, 10];

let constructArrWithoutDuplicate = function() {
	let duplicates = [];

	numbers.forEach(num => {
		if(duplicates[`item_${num}`] == undefined){
			duplicates[`item_${num}`] = 1;
		}else{
			duplicates[`item_${num}`] += 1;
		}
	});
	return duplicates;
}

let duplicates = constructArrWithoutDuplicate();
let resultArr = []
for(let key in duplicates) {
	if(duplicates[key] == 1) {
		resultArr.push(parseInt(key.replace('item_', '')))
	}
}
console.log(resultArr);