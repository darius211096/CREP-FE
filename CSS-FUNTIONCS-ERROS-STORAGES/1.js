function someDeclFunc(a, b, c) {
    console.log(arguments);
}

var someExpFunc;

someExpFunc = function someName() {
    if (1 < 2) {
        someName();
    }

    console.log(this);
};

var someArrFunc = (a,b,c) => {
    console.log(this);
    console.log(arguments);
};

// someDeclFunc(1, 2, 3);
// someExpFunc();
// someArrFunc(1,2,3);


// new someDeclFunc
// new someArrFunc