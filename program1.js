

let arr = [10,20,30,40,50,60,70,80,90,100];

let insertUsingIteration = function(number){
	let findPosition = function(){
		let index;
		for(let i in arr){
			if(arr[i]>number){
				index=i;
				break;
			}
		}	
		return index;
	}
	let position = findPosition();
	let newarr=[];
	for(let i in arr){
		if(i==position){
			newarr.push(number);
		}
		newarr.push(arr[i]);
	}
	return newarr;
}

let insertUsingBinarySearch = function(number){

   let findPosition = function(start,end,number){
		let mid=(start+end)/2;
		if(arr[mid]<number)
			findPosition(start , mid);
		else
			return mid;
		return -1;
	}

	let position= findPosition(0,arr.length,number);
	
	let newarr=[];
	for(let i in arr){
		if(i==position){
			newarr.push(number);
		}
		newarr.push(arr[i]);
	}
	return newarr;
}






//insertUsingIteration(55);


console.log(insertUsingIteration(55));