var externalCounter = 0;

function someFunc(counter2) {
    counter2 = ++counter2;
    externalCounter = externalCounter + (counter2 * 2);
    return counter2;
}

// 0
// someFunc();
// console.log(counter);

// 1
// someFunc();
// 2
// someFunc();
// 3
// someFunc();
// 4
// someFunc();
// 5
// someFunc();

// console.log(counter);


function someFunc2() {
    let counter = 1;

    return someFunc(counter);
}

console.log(someFunc2());
console.log(externalCounter);