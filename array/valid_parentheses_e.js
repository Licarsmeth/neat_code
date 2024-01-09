var isValid = function (s) {
  let stack = [];
  let top;
  s.split("");
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") stack.push(s[i]);
    else if (s[i] == ")") {
      if (stack.length==0) return 0;
      else {
        top = stack.pop();
        if (!(top == "(")) {stack.push(top)
        stack.push(s[i])};
      }
    }
    
    else if (s[i] == "}") {
      if (stack.length==0) return 0;
      else {
        top = stack.pop();
        if (!(top == "{")) {stack.push(top)
        stack.push(s[i])};
      }
    }
    
    else if (s[i] == "]") {
      if (stack.length==0) return 0;
      else {
        top = stack.pop();
        if (!(top == "[")) {stack.push(top)
        stack.push(s[i])};
      }
    }
  }
  console.log(stack);
  if (stack.length==0) return true;
  else return false;
};

let s = "()";
isValid(s);
