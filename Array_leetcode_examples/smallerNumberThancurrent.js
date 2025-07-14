let nums = prompt("Enter the numbers separated by commas:");
nums = nums.split(",").map(Number);

function smallerNumbersThanCurrent(nums) {
    let result = new Array(nums.length); // Result array of same size);

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        result[i] = count;
    }


    return result;
}
const output = smallerNumbersThanCurrent(nums);
console.log(output); 
//Time Complexity: O(n^2) where n is the length of the input array
//Space Complexity: O(n) for the result array