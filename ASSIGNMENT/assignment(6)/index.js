// Write a function formatNames(arr) that takes an array of names and returns a formatted string where all names are capitalized and joined with a comma.
function formatNames(arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(", ");
}
console.log(formatNames(["alice", "bob", "charlie"]));
// Output: "Alice, Bob, Charlie"


