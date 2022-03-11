/**
 * given a string with parentheses, square brackets, or curly braces
 * return true or false if it is balanced
 * 
 * ############################
 * 
 * balancedParentheses("(){}"); 
 *  -> returns true
 * balancedParentheses("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]");
 *  -> returns true
 * balancedParentheses("({(()))}}");  
 *  -> returns false
*/
function balancedParentheses(str){
  //make a stack to put opening braces
  let stack = [];
  //make map to pair opening with closing braces
  let charPairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for(let char of str){
    //if character in string is opening brace, put into stack
    if(char === '(' || char === '{' || char === '[' ){
      stack.push(char);
    } else if(char === ')' || char === '}' || char === ']' ){
      //if closing brace, pop the opening off the stack
      let lastOpening = stack.pop();
      //check if popped element matches with the closing
      if(char != charPairs[lastOpening]) return false;
      
    }
  }

  //if there are any opening braces afterwards, return false otherwise it's balanced
  if(stack.length !== 0) return false;
  return true;
}