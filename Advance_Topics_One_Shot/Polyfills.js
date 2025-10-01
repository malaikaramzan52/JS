//Pollyfills
// Polyfills are code snippets that provide modern functionality in older browsers that do not natively support it.

// Example:
// Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
    Array.prototype.includes = function (element) {
        return this.indexOf(element) !== -1;
    };
}

console.log([1, 2, 3].includes(2)); // true

// Use Case -> Used to ensure compatibility with older browsers.
// Advantage -> Enables modern JavaScript features in older environments.