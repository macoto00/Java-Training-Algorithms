class RangeSumQueryImmutable {
    constructor(nums) {
        this.nums = nums;
    }

    sumRange(left, right) {
        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    }

    leftNumber(sumArray) {
        return sumArray[0];
    }

    rightNumber(sumArray) {
        return sumArray[1];
    }
}

const nestedArray = [
    [[-2, 0, 3, -5, 2, -1]],
    [[0, 2]],
    [[2, 5]],
    [[0, 5]]
];

const nums = nestedArray[0][0];
const obj = new RangeSumQueryImmutable(nums);

console.log(obj.sumRange(obj.leftNumber(nestedArray[1][0]), obj.rightNumber(nestedArray[1][0])));
console.log(obj.sumRange(obj.leftNumber(nestedArray[2][0]), obj.rightNumber(nestedArray[2][0])));
console.log(obj.sumRange(obj.leftNumber(nestedArray[3][0]), obj.rightNumber(nestedArray[3][0])));
