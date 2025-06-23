let expression ='sub'
var num1 = 1
var num2 = 2
let result;
switch (expression) {
    case "add":
       result= num1 + num2
        break;
    case 'sub':
       result = num1 - num2
        break;
    case 'mul':
        result = num1 * num2
        break;
case 'div':
    result = num1/num2
    break;
    default:
        console.log('Invalid Expression')
        break;    
}
console.log('the',expression,'of given number is',result);
