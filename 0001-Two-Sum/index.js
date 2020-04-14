/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const complementMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in complementMap) {
            return [complementMap[complement], i];
        }

        complementMap[nums[i]] = i;
    }
};
