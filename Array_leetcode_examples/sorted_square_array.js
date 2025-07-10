let nums = prompt("Enter the numbers separated by commas:")
              .split(",")
              .map(Number);

// Function to return sorted squares of input array
function sortedSquares(nums) {
    let left = 0;                    // Start pointer
    let right = nums.length - 1;    // End pointer
    let index = nums.length - 1;    // Position to insert into result array
    let result = new Array(nums.length); // Result array of same size

    // Process from both ends toward center
    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[index] = nums[left] ** 2; // Square larger and insert
            left++;                          // Move left pointer
        } else {
            result[index] = nums[right] ** 2;
            right--;                         // Move right pointer
        }
        index--;                             // Move to next position in result
    }

    return result;
}

// Call the function and print result
let output = sortedSquares(nums);
console.log(output);
