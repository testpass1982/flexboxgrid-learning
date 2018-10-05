function test() {
    console.log('I am test: ');
    (function () {
        console.log('I am inner function');
    })();
    (function () {
        console.log('I am second inner function');
    })();
}

test();
