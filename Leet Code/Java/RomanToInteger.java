package leetcode;

import java.util.HashMap;
import java.util.Map;

public class RomanToInteger {
    public int romanToInt(String s) {
        Map<Character, Integer> romanMap = createRomanMap();
        int result = 0;
        int n = s.length();

        for (int i = 0; i < n; i++) {
            int current = romanMap.get(s.charAt(i));
            int next = (i < n - 1) ? romanMap.get(s.charAt(i + 1)) : 0;

            if (current < next) {
                result -= current;
            } else {
                result += current;
            }
        }

        return result;
    }

    private Map<Character, Integer> createRomanMap() {
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);
        return romanMap;
    }
}
