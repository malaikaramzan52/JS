//Recursion
//Recursion is a programming technique where a function calls itself repeatedly to solve a problem.
//Without base cases, a recursive function won't know when to stop, resulting in an infinite recursion (error).


let num;
function countDown(num){//Function Declaration
    if(num==1){//Base Case
        console.log(num);
        return;
    }
    console.log(num);
    countDown(num-1);

}
countDown(4);
//N factorial

let n;
function fact(n){
    if(n==0){
        return 1;
    }
    return n * fact(n-1);
}
console.log(fact(4));
//Sum to N numbers

function sumToN(n){
    if(n==1){
        return 1;
    }
    return n + sumToN(n-1);
}
console.log(sumToN(5));
//CountDown
let count=10;
function CountDown2(count){
    if(count==1){
        console.log(count);
        return;
    }
    console.log(count);
    CountDown2(count-1);
}
CountDown2(count);

//find the nth Fibonacci number
let number=4;
function Fibonacci(number){
    if(number<=1){
        return number;
    }
    return Fibonacci(number-1) + Fibonacci(number-2);
    
}
let result = Fibonacci(number);
console.log(result);

//Time Complexity : O(2^n)

//Checks the array is sorted or not
let arr=[1,2,,0,-1,3,4,5,2];
function isSorted(arr,n){
    if(n == 0 || n == 1){
        return true;
    }
    return (arr[n-1] >= arr[n-2]) && isSorted(arr,n-1);
}
let length = arr.length;
console.log(isSorted(arr,length));
//Time Complexity: O(n)
//Space Complexity: O(n) (due to recursive call stack)

//=========================== Binary Search using Recursion =========================
//to calculate mid start+end/2

let array =[1,2,3,4,5,6,7,8,9];
let target=5;

function binarySearch(array,target,start,end){
    if(start>end){
        return -1;
    }
    if(start<=end){
        let mid = Math.floor((start+end)/2);
        if(array[mid]===target){
            return mid;
        }
       else if(array[mid]>target){
            return binarySearch(array,target,start,mid-1);
        }
       else{
           return binarySearch(array,target,mid+1,end);
       }
    }
}
console.log(binarySearch(array,target,0,array.length-1));
//Time Complexity:O(log n)
//Space Complexity:O(log n) (due to recursive call stack)
