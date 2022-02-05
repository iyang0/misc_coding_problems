function selectionSort(array) {
    let sortedIdx = 0;
      
    while(sortedIdx < array.length){
        let lowestUnsorted = array[sortedIdx];
        let lowestUnsortedIdx = sortedIdx;
        
        for(let i=sortedIdx; i<array.length; i++){
            if(array[i] <= lowestUnsorted){
                lowestUnsorted = array[i];
                lowestUnsortedIdx = i;
            }
        }
        
        if(lowestUnsortedIdx !== sortedIdx) swap(array, sortedIdx, lowestUnsortedIdx);
        
        sortedIdx++;
    }
    return array;
}
  
function swap(arr, a, b){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}