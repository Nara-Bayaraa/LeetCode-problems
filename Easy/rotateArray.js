function rotate(nums, k) {
  k = k % nums.length;


  const reverseNums = (nums, start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };
  nums.reverse();
  reverseNums(nums, 0, k - 1);
  reverseNums(nums, k, nums.length - 1);
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log("Rotated nums1:", nums1); 
