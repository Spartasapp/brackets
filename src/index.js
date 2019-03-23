module.exports = function check(str, bracketsConfig) {
  let ar = str.split('');
let counter = 0;
let stack = [];
ar.forEach(function (element) {
    // count open brackets == closed brackets
    for(let i = 0; i<bracketsConfig.length; i++){
        if (counter <0){
            break;
        }
        for(let k = 0; k<bracketsConfig[i].length; k++){
            if (element == bracketsConfig[i][0] && element == bracketsConfig[i][1] && element == stack[stack.length - 1]) {
                stack.pop();
                return counter--;
            }
            else if (bracketsConfig[i][1] == element && bracketsConfig[i][0] == stack[stack.length-1]) {
                stack.pop();
                return counter--;
            } 
            else if (k==0 && bracketsConfig[i][k] == element ) {
               stack.push(element);
               return counter++;
            } 
            else if( bracketsConfig[i][1] == element && stack[stack.length - 1] == bracketsConfig[i][0]) { 
                stack.pop();
               return counter--; 
            }
            else if (bracketsConfig[i][1] == element){
                 counter--;
                 if (counter <0){
                    break;
                }
            }
        }
        
    }
    
});
if (counter <0){
    return false;
}
else if (counter > 0){
    return false;
}
else if (counter == 0 && stack.length == 0) {
    return true;
}
}
