// Lexical Analyzer in JavaScript

//Takes input from user
let input = prompt("Enter an expression:");

function lexicalAnalyzer(input) {
    const tokens = [];//Empty array to hold tokens
    // Define patterns for token types
    const tokenPatterns = [
        { type: "Keyword", regex: /^(int|float|char|double|return|if|else|while|for|let|var|const)\b/ },//keywords
        { type: "Identifier", regex: /^[a-zA-Z_]\w*/ },                          //variable names
        { type: "Constant", regex: /^[+]?\d+(\.\d+)?/ },                         //integer and floating-point constants
        { type: "String", regex: /^"([^"\\]|\\.)*"/ },                           //string literals
        { type: "Operator", regex: /^(\+|\-|\*|\/|%|=|==|<=|>=|<|>|&&|\|\||!)/ },//arithmetic and logical operators
        { type: "Punctuation", regex: /^(\;|\,|\(|\)|\{|\})/ },                   //punctuation marks
        { type: "Whitespace", regex: /^\s+/ }                                     // ignore spaces
    ];
    // Copy of input string to process
    let str = input;
    // Process the input string
    while (str.length > 0) {
        let matched = false;    //flag to check if any pattern matched
        // Check each pattern
        for (let { type, regex } of tokenPatterns) {
            const match = str.match(regex);
            if (match) {
                matched = true;
                if (type !== "Whitespace") { // ignore whitespace
                    tokens.push({ type, lexeme: match[0] });
                }
                str = str.slice(match[0].length); // Remove matched part from string
                break;
            }
        }
        // If no patterns matched, it's an error
        if (!matched) {
            throw new Error("Unrecognized token: " + str[0]);
        }
    }

    return tokens;
}
// Get tokens from input
const result = lexicalAnalyzer(input);

// Display result as table
console.table(result);
