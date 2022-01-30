function bubbleSort(array) {
	for(let i=0; i< array.length; i++){
		for(let j=0; j < array.length-i; j++){
			if(array[j] > array[j+1]){
				swap(array, j, j+1);
			}
		}
	}
	return array;
}

function swap(arr, a, b){
	const temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}