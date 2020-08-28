import java.util.Stack;

/*
Given a string containing just the characters
    '(', ')', '{', '}', '[' and ']'
determine if the input string is valid.

        An input string is valid if:

        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        Note that an empty string is also considered valid.

        Examples:

        Input: "()"         Input: "([)]"
        Output: true        Output: false

        Input: "()[]{}"     Input: "{[]}"
        Output: true        Output: true

        Input: "(]"
        Output: false
*/
public class ValidParenthesis {

    // Parenthesis
    static final char LEFT_PAREN = '(', RIGHT_PAREN = ')';
    // Curly braces
    static final char LEFT_CURLY = '{', RIGHT_CURLY = '}';
    // Square brackets
    static final char LEFT_BRACKET = '[', RIGHT_BRACKET = ']';

    public boolean isValid(String s) {

        if(s.length() < 2)
            return false;

        Stack<Character> bigStack = new Stack<>();

        int index = 0;
        char top = 'X';
        while(index < s.length()) {

            char c = s.charAt(index);

            if(!bigStack.empty())
                top = bigStack.peek();

            // what character do we have?
            if (c == LEFT_BRACKET)
                bigStack.push(c);

            else if (c == RIGHT_BRACKET)
            {
                if (top == LEFT_BRACKET)
                    bigStack.pop();
                else
                    return false;
            }

            else if (c == LEFT_CURLY)
                bigStack.push(c);

            else if (c == RIGHT_CURLY)
            {
                if (top == LEFT_CURLY)
                    bigStack.pop();
                else
                    return false;
            }

            else if (c == LEFT_PAREN)
                bigStack.push(c);

            else if (c == RIGHT_PAREN)
            {
                if (top == LEFT_PAREN)
                    bigStack.pop();
                else
                    return false;
            }

            index++;
        }

        return bigStack.empty();
    }



    public static void main(String[] args) {

        // test cases
        String input1 = "[({})]";
        String input2 = "()[]{}";
        String input3 = "(]";
        String input4 = "([)]";
        String input5 = "{[]}";

        ValidParenthesis someObj = new ValidParenthesis();

        System.out.println(someObj.isValid(input1));
        System.out.println(someObj.isValid(input2));
        System.out.println(someObj.isValid(input3));
        System.out.println(someObj.isValid(input4));
        System.out.println(someObj.isValid(input5));


    } // end of main

} // end of class

/*

// With Maps
class Solution {

    // Hash table that takes care of the mappings.
    private HashMap<Character, Character> mappings;

    // Initialize hash map with mappings. This simply makes the code easier to read.
    public Solution() {
        this.mappings = new HashMap<Character, Character>();
        this.mappings.put(')', '(');
        this.mappings.put('}', '{');
        this.mappings.put(']', '[');
    }

    public boolean isValid(String s) {

        // Initialize a stack to be used in the algorithm.
        Stack<Character> stack = new Stack<Character>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            // If the current character is a closing bracket.
            if (this.mappings.containsKey(c)) {

                // Get the top element of the stack. If the stack is empty, set a dummy value of '#'
                char topElement = stack.empty() ? '#' : stack.pop();

                // If the mapping for this bracket doesn't match the stack's top element, return false.
                if (topElement != this.mappings.get(c)) {
                    return false;
                }
            } else {
                // If it was an opening bracket, push to the stack.
                stack.push(c);
            }
        }

        // If the stack still contains elements, then it is an invalid expression.
        return stack.isEmpty();
    }
}
*/
