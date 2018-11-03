
let arr = [10,20,20,40,10,60,60,80,70,10];

let checkDuplicate = function() {
	let duplicates= [];

	arr.forEach(num=>{
		if(duplicates[num]==undefined){
			duplicates[num]=1;
		}else{
			duplicates[num]+=1;
		}
	});
	return duplicates.filter(value => value>1);

}

let duplicates = checkDuplicate();
console.log(duplicates.length > 0);