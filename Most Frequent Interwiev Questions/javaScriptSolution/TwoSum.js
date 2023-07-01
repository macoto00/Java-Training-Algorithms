function twoSum(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                break;
            }
        }
    }

    return result;
}

const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));
