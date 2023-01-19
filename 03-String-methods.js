let quote = "   Never-Give-Up   ";

let newString1 = quote.trim();
console.log(newString1);

// Trim removes all spaces at the beginning and the end.
// Remember it doesnt change the original string but creates the new one.

let newString2 = quote.toUpperCase();
console.log(newString2);

// It will change all characters to upper case .
// It too returns a new string.

// Similar is for toLowerCase

let newString3 = newString1.slice(0, 5);
console.log(newString3);

// This will give the characters starting from index 0 and ending at index 4 (one less than the second assigned number , here 5).
