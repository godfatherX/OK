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

function exploreTypeConversion() {
    const num = 42;
    const str = "123";
    const bool = true;
    
    // Implicit conversion

    const implicitConversion = num + str; // Number to String conversion
    console.log("Implicit Conversion:", implicitConversion); // "42123"

    // Explicit conversion
    const explicitConversionToNumber = Number(str); // String to Number conversion
    const explicitConversionToString = String(num); // Number to String conversion
    const explicitConversionToBoolean = Boolean(1); // Number to Boolean conversion

    console.log("Explicit Conversion to Number:", explicitConversionToNumber); // 123
    console.log("Explicit Conversion to String:", explicitConversionToString); // "42"
    console.log("Explicit Conversion to Boolean:", explicitConversionToBoolean); // true

    // Type coercion
    const coercionResult = num + bool; // Number to Boolean conversion
    console.log("Type Coercion Result:", coercionResult); // 43 (true is coerced to 1)
    console.log(typeof(coercionResult)); // "number"

    // Equality comparisons
    console.log("Equality Comparisons:");
    console.log(1 == "1"); // true (loose equality, string to number conversion)
    console.log(1 === "1"); // false (strict equality, different types)
    console.log(1 != "1"); // false (loose inequality, string to number conversion)
    console.log(1 !== "1"); // true (strict inequality, different types)
    console.log("0" == 0); // true (loose equality, string to number conversion)
    console.log("0" === 0); // false (strict equality, no conversion)
    console.log("0" != 0); // false (loose inequality, string to number conversion)
    console.log("0" !== 0); // true (strict inequality, no conversion)

    // Special cases with null and undefined
    console.log("Special Cases with null and undefined:");
    console.log(null == 0); // false (loose equality, null is not equal to 0)
    console.log(null === 0); // false (strict equality, different types)
    console.log(undefined == 0); // false (loose equality, undefined is not equal to 0)
    console.log(undefined === 0); // false (strict equality, different types)

    // Comparisons with null and undefined
    console.log("Comparisons with null and undefined:");
    console.log(null == undefined); // true (loose equality, both are considered equal)
    console.log(null === undefined); // false (strict equality, different types)
    console.log(null != undefined); // false (loose inequality, both are considered equal)
    console.log(null !== undefined); // true (strict inequality, different types)
    console.log(null > 0); // false (null is not greater than 0)
    console.log(null < 0); // false (null is not less than 0)
    console.log(null >= 0); // true (null is considered equal to 0 in loose comparison)
    console.log(null <= 0); // true (null is considered less than or equal to 0 in loose comparison)

    // Comparisons with undefined
    console.log(undefined > 0); // false (undefined is not greater than 0)
    console.log(undefined < 0); // false (undefined is not less than 0)
    console.log(undefined >= 0); // false (undefined is not greater than or equal to 0)
    console.log(undefined <= 0); // false (undefined is not less than or equal to 0)

    // Comparisons between null and undefined
    console.log("Comparisons between null and undefined:");
    console.log(null == undefined); // true (loose equality, both are considered equal)
    console.log(null === undefined); // false (strict equality, different types)
    console.log(null != undefined); // false (loose inequality, both are considered equal)
    console.log(null !== undefined); // true (strict inequality, different types)

    // Special cases with null and undefined
    console.log("Special Cases with null and undefined:");
    console.log(null == 0); // false (loose equality, null is not equal to 0)
    console.log(null === 0); // false (strict equality, different types)
    console.log(undefined == 0); // false (loose equality, undefined is not equal to 0)
    console.log(undefined === 0); // false (strict equality, different types)

    // Comparisons with null and undefined
    console.log("Comparisons with null and undefined:");
    console.log(null == undefined); // true (loose equality, both are considered equal)
    console.log(null === undefined); // false (strict equality, different types)
    console.log(null != undefined); // false (loose inequality, both are considered equal)
    console.log(null !== undefined); // true (strict inequality, different types)
    console.log(null > undefined); // false (null is not greater than undefined
    console.log(null < undefined); // false (null is not less than undefined
    console.log(null >= undefined); // false (null is not greater than or equal to undefined
    console.log(null <= undefined); // false (null is not less than or equal to undefined
    console.log(typeof(null)); // "object" (this is a historical bug in JavaScript
    console.log(typeof(undefined)); // "undefined"

    // Comparisons with null and 0
    console.log("Comparisons with null and 0:");
    console.log(null == 0); // false (loose equality, null is not equal to 0)
    console.log(null === 0); // false (strict equality, different types)
    console.log(null != 0); // true (loose inequality, null is not equal to 0)
    console.log(null !== 0); // true (strict inequality, different types)
    console.log(null > 0); // false (null is not greater than 0)
    console.log(null < 0); // false (null is not less than 0)
    console.log(null >= 0); // true (null is considered equal to 0 in loose comparison)
    // console.log(null >== 0); // false (strict comparison, null is not equal to 0)
}


// sayHello();
// var globalVar = "I am global"; // This is a global variable
// console.log("Global variable before modification:", globalVar);

// exploreVariables();

// console.log("Global variable after modification:", globalVar);

// exploreDataTypes();

exploreTypeConversion();