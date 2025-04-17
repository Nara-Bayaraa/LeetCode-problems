var removeDuplicates = function(nums) {
    let uniqueSet = new Set(nums);
    let uniqueElements = [...uniqueSet];
    
    for (let i = 0; i < uniqueElements.length; i++) {
        nums[i] = uniqueElements[i]; 
    }
    
    return uniqueElements.length;
};
console.log(removeDuplicates([1, 1, 2])); //2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5
