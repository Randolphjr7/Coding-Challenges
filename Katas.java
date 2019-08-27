/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
  
    // Array of doubles
    double[] values = {4,5,6,4,5,3,7};

    // Sum and Average Value
    double total = 0;
    for(double element : values){
      total += element;
    }

    double avg = total/values.length;
    System.out.println("The average is " + String.valueOf(avg));

    // Maximum and Minimum
    double largest = values[0];
    for(double element: values){
        if(largest < element){
          largest = element;
        }
    }
    System.out.println("The largest is " + String.valueOf(largest));

    // Element Seperators
    String display = "";
    for(int i = 0; i < values.length; i++){
      if(i > 0){
          display += " , ";
      }
      display += String.valueOf(i);
    }
    System.out.println(display);
    }
    
}
