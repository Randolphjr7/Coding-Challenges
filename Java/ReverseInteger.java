package katas;

import java.util.ArrayList;

/**
 *
 * @author rando
 */
public class ReverseInteger {
    
    // class variables
    private int number,result;
    
    
    // constructor
    ReverseInteger(int number) {
        this.number = number;
    }
    
    // start reverse
    public int reverse() {
        if(this.number > 0){
            return positiveNum();
        }
        else {
            return negativeNum();
        }
    }
    
    // invoked if positive
    public int positiveNum(){
        int temp = this.number;
        StringBuilder strNum = new StringBuilder();
        ArrayList<Integer> array = new ArrayList<>();
        
        System.out.println("Starting number: " + temp);

        do{
            array.add(temp % 10);
            temp /= 10;
        } while (temp > 0);
       
        
        array.forEach((element) -> {
            strNum.append(element);
            });
        
        result = Integer.parseInt(strNum.toString());
        System.out.println("Ending number: " + result + "\n");
        return result;
    }
    
    // invoked if negative
    public int negativeNum() {
        int temp = number;
        System.out.println("Staring num: " + temp);
        
        String negativeNum = String.valueOf(temp);
        char[] digits = negativeNum.toCharArray();
        
        for(int i = 1; i < digits.length/2; i++) {
            char temporary = digits[i];
            digits[i] = digits[digits.length -i -1];
            digits[digits.length -i -1] = temporary;
        }
        
        StringBuilder strNum1 = new StringBuilder();
        for(int i = 0; i < digits.length; i++) {
            String digit = String.valueOf(digits[i]);
            strNum1.append(digit);
        }
        
        result = Integer.parseInt(strNum1.toString());
        System.out.println("Ending number: " + result);
        return result;
    }
    
    
}
