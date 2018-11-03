
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let insertUsingIteration = (number) => {
	let findPosition = () => {
		let index;
		for(let i in numbers) {
			if(numbers[i] > number){
				index = i;
				break;
			}
		}	
		return index;
	}
	let position = findPosition();
	let newNumbers = [];
	for(let i in numbers){
		if(i == position){
			newNumbers.push(number);
		}
		newNumbers.push(numbers[i]);
	}
	return newNumbers;
}

let insertUsingBinarySearch = (number) => {
   let findPosition = (start, end, number) => {
		let mid = (start + end) / 2;
		if(numbers[mid] < number)
			findPosition(start, mid);
		else
			return mid;
		return -1;
	}
	let position = findPosition(0, numbers.length, number);
	let newNumbers = [];
	for(let i in numbers){
		if(i == position){
			newNumbers.push(number);
		}
		newNumbers.push(numbers[i]);
	}
	return newNumbers;
}

console.log(`Insert number using Iteration ${insertUsingIteration(55)}`);
console.log(`Insert number using Iteration ${insertUsingBinarySearch(55)}`);