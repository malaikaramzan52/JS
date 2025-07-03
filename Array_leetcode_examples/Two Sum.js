//Two Sum
let input=prompt("Enter array elements:");//input array
let target=parseInt(prompt("Enter target number"));//input target
let nums = input.split(",").map(Number);//convert string to number

function twoSum(nums,target){
    for(let i=0 ;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if (nums[i]+nums[j]=== target){
                return [i,j];
            }

        }
    }
    return [];
}

let result= twoSum(nums,target);
    if(result){
        console.log(result);
    }else{
        console.log("Not found");
    }
    //Time Complexity: O(n^2)
