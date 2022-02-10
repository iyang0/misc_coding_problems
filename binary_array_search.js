/**
 * given a sorted array, return the index of the number that matches target
 * if none, return -1
*/
function binarySearch(array, target) {
	let left = 0;
	let right = array.length-1;
	
	while(right >= left){
		//recalculate midpoint between right and left pointers.
		let mid = left + Math.floor((right - left)/2);
		
		if(array[mid] === target) return mid;
		if(array[mid] > target) right = mid - 1;
		if(array[mid] < target) left = mid + 1;
	}
	
	return -1
}