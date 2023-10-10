/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let min = nums[0];
  let max = nums[0];

  if (nums.length < 3) {
    return -1;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
    }
    if (nums[i] > max) {
        max = nums[i];
      }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== min && nums[i] !== max) {
      return nums[i];
    }
  }

  return -1;
};