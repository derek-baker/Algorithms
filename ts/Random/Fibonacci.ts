/** 
 * Computes the nth fibonacci value non-optimally 
 * @param n - fibonacci value to compute (n >= 0)
 */
function Fibonacci(n: number) {    
    if (n === 0) {
        return n;        
    }
    if (n === 1) {
        return n;       
    }    
    const fibNumOne: number = Fibonacci(n - 1); 
    const fibNumTwo: number = Fibonacci(n - 2);
    return fibNumOne + fibNumTwo;    
}

const fibNumSub = 7;
const fibNum = Fibonacci(fibNumSub);
console.log(`The ${fibNumSub}th fibonacci value is ${fibNum}`);
        