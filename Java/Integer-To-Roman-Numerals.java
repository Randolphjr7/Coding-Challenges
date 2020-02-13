/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999. */

public class RomanNumerals {
    // Parallel arrays in descending order by value
    private static final String[] numerals = new String[]{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", 
    "V", "IV", "I"};

    private static final int[] values = new int[]{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    
    public static String intToRoman(int value) {
        // throw run-time exception if not in range
        if(value > 3999 || value < 1) throw new IllegalArgumentException();

        StringBuilder romanNumeral = new StringBuilder();
        int i = 0;
        // append largest numeral possible until value <= 0
        while(value > 0) {
          if(value - values[i] >= 0) {
            romanNumeral.append(numerals[i]);
            value -= values[i];
          } 
          else {
            i++;
          }
        }

        return romanNumeral.toString();
    }

    // Sample test cases
    public static void main(String[] args) {
        assert intToRoman(2).equals("II");
        assert intToRoman(4).equals("IV");
        assert intToRoman(5).equals("V");
        assert intToRoman(6).equals("VI");
        assert intToRoman(9).equals("IX");
        assert intToRoman(10).equals("X");
        assert intToRoman(30).equals("XXX");
        assert intToRoman(49).equals("XLIX");
        assert intToRoman(530).equals("DXX");
        assert intToRoman(713).equals("DCCXII");
        assert intToRoman(1304).equals("MCCCIV");

        System.out.println("Sample Cases Passed");
    }

};