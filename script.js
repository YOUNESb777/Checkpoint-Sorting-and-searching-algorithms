function insertionSort(arr) {
    
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];  
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = current;
    }

    return arr;
}

/* Example usage:
const arr = [10, 11, 12, 7, 13, 1];
console.log(insertionSort(arr));  // Output: [1, 7, 10, 11, 12, 13]*/
