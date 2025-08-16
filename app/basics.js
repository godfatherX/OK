function sayHello() {
    console.log("Hello, world!");
}

function exploreVariables() {
    // variables are declared and initialized...
    const constantVar = 10;
    let localVar = "I am local";
    var globalVar = "I am global";

    // noVal; // This will throw an error since noVal is not defined
    let noVal_2; // This is declared but not initialized

    console.log(constantVar);
    console.log(localVar);
    console.log(globalVar);
    console.table([ constantVar, localVar, globalVar, noVal_2 ]); // console.table({}) is same as console.table([])
    // console.log(noVal); // This will throw an error since noVal is not defined
}


// sayHello();

exploreVariables();