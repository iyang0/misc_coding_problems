function insertionSort(array) {
	
	for(let sortedIdx = 0; sortedIdx < array.length; sortedIdx++){
		let unsortedIdx = sortedIdx;
		
		while(	unsortedIdx > 0 && 
				array[unsortedIdx] < array[unsortedIdx - 1]){
			
			swap(array, unsortedIdx, unsortedIdx - 1);
			unsortedIdx -= 1;
		}
		
	}
	return array;
}

function swap(arr, a, b){
	const temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}