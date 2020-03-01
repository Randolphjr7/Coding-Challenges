package katas;

/**
 *
 * @author randolph
 */
public class Katas {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
  
        
        
        // Reverse Integer 
        ReverseInteger test1 = new ReverseInteger(456);
        ReverseInteger test2 = new ReverseInteger(-456);
        
        test1.reverse();
        test2.reverse();
        
        
        // Roman Numerals
        int number = 1073;
        String intToRoman = RomanNumerals.intToRoman(number);
        System.out.println("\nInteger " + number + " to Roman: " + intToRoman);
    }
}
