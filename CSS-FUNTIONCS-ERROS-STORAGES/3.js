// console.error('some error');

// console.log('code after error');
function someFunc() {
    throw new Error('some another error');
}

// someFunc();

// console.log('code after error');


try {
    // someFunc();
    console.log(234);
} catch(e) {
    console.log(123);
}



function someAnotherFunc(arg1, arg2) {
    if (arg1 && arg2) {
        return arg1.a + arg2.b;
    }
    return 234;
}

function someAnotherFunc(arg1, arg2) {
    try {
        const a = arg1.a + arg2.b;
    } catch(e) {
        console.log(e);
    }
    return a;
}