package javaSolution;
/*
Given an integer array nums, handle multiple queries of the following type:

    Calculate the sum of the elements of nums between indices left and right
    inclusive where left <= right.

Implement the NumArray class:

    NumArray(int[] nums) Initializes the object with the integer array nums.
    int sumRange(int left, int right) Returns the sum of the elements of nums
    between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 */
public class RangeSumQueryImmutable {

    private final int[] nums;
    public RangeSumQueryImmutable(int[] nums) {
        this.nums = nums;
    }

    public int sumRange(int left, int right) {
        int sum = 0;
        for (int i = left; i <= right; i++) {
            sum += nums[i];
        }
        return sum;
    }

    public int leftNumber(int[] sumArray){
        return sumArray[0];
    }

    public int rightNumber(int[] sumArray){
        return sumArray[1];
    }

    public static void main(String[] args) {
        int[][][] nestedArray = {
                { { -2, 0, 3, -5, 2, -1 } },
                { { 0, 2 } },
                { { 2, 5 } },
                { { 0, 5 } }
        };

        int[] nums = nestedArray[0][0];
        RangeSumQueryImmutable obj = new RangeSumQueryImmutable(nums);

        System.out.println(obj.sumRange(obj.leftNumber(nestedArray[1][0]), obj.rightNumber(nestedArray[1][0])));
        System.out.println(obj.sumRange(obj.leftNumber(nestedArray[2][0]), obj.rightNumber(nestedArray[2][0])));
        System.out.println(obj.sumRange(obj.leftNumber(nestedArray[3][0]), obj.rightNumber(nestedArray[3][0])));
    }
}
