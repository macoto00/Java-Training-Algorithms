package javaSolution;

import java.util.Arrays;
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

public class TwoSum {

    public static void main(String[] args) {
        Integer[] nums = {3, 2, 4};
        int target = 6;

        System.out.print(Arrays.toString(twoSum(nums, target)));
    }

    public static Integer[] twoSum(Integer[] nums, int target) {
        Integer[] result = new Integer[2];

        for (int i = 0; i <= nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    result[0] = i;
                    result[1] = j;
                    break;
                }
            }
        }

        return result;
    }
}
