
//stack
let kek = "ayonima"; // Primitive type stored in the Stack.
let kekw = kek;   // A copy of the value is created in the Stack.
kekw = "ni99@";        // Changing the copy does not affect the original.

console.log(kek); //(Original value remains unchanged)
console.log(kekw);   //(Only the copy value is changed)
console.log("-----------------------------------------------------------------------------------------")
let niga1 = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let niga2 = niga1;  // userTwo references the same object in the Heap.

niga2.email = "soap@google.com"; // Modifying niga2 also affects niga1.

console.log(niga1.email); // Output: The same as niga2 
console.log(niga2.email); 