function sayHello() {
    console.log("Hello, world!");
}

function exploreVariables() {
    // variables are declared and initialized...
    const constantVar = 10;
    let localVar = "I am local";
    globalVar += " and I am modified"; // This modifies the global variable

    // noVal; // This will throw an error since noVal is not defined
    let noVal_2; // This is declared but not initialized

    console.log(constantVar);
    console.log(localVar);
    console.log(globalVar);
    console.table([ constantVar, localVar, globalVar, noVal_2 ]); // console.table({}) <related to objets> is same as console.table([]) <related to arrays>

    // console.log(noVal); // This will throw an error since noVal is not defined
}

function exploreDataTypes() {
    const num = 42; // Number
    const str = "Hello"; // String
    const bool = true; // Boolean
    const arr = [1, 2, 3]; // Array
    const obj = { key: "value" }; // Object
    const func = function() { console.log("I am a function"); }; // Function

    let noVal; // Undefined
    let noVal_2 = null; // Null

    console.log("Number:", num);
    console.log("String:", str);
    console.log("Boolean:", bool);
    console.log("Array:", arr);
    console.log("Object:", obj);
    console.log("Function:", func);
    console.log("Undefined:", noVal);
    console.log("Null:", noVal_2);

    /*
      Data types in JavaScript:
        - Number: Represents numeric values (e.g., 42, 3.14)
        - String: Represents text (e.g., "Hello")
        - Boolean: Represents true or false values
        - Array: Represents a list of values (e.g., [1, 2, 3])
        - Object: Represents a collection of key-value pairs (e.g., { key: "value" })
        - Function: Represents a callable block of code
        - Undefined: Represents a variable that has been declared but not assigned a value
        - Null: Represents an intentional absence of any value
        - Symbol: Represents a unique identifier (not covered here)
        - BigInt: Represents integers with arbitrary precision (not covered here)
                  Represents integers with arbitrary precision (e.g., 12345678901234567890n)
        - Symbol: Represents a unique identifier (e.g., Symbol('description'))


    */

    console.table([num, str, bool, arr, obj, func, noVal, noVal_2]);
}


// sayHello();
// var globalVar = "I am global"; // This is a global variable
// console.log("Global variable before modification:", globalVar);

// exploreVariables();

// console.log("Global variable after modification:", globalVar);


exploreDataTypes();