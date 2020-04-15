/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const combinedNums = nums1.concat(nums2).sort((a, b) => a - b);
    const median = (combinedNums.length - 1) / 2;
    const remainder = median % 1;

    if (remainder) {
        const median1 = median - remainder;
        const median2 = median1 + 1;

        return (combinedNums[median1] + combinedNums[median2]) / 2;
    }

    return combinedNums[median];
};