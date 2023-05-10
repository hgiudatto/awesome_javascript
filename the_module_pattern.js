// Module pattern
const myModule = (function () {
    let privateVariable = 'I am a private variable'

    function privateFunction() {
        console.log(privateVariable);
    }

    return {
        publicMethod: function () {
            privateFunction()
        },
        publicVariable: 'I am a public variable'
    }
})()
console.log(`myModule.publicMethod() -> `, myModule.publicMethod());
console.log(`myModule.publicVariable -> `, myModule.publicVariable);
console.log(`myModule.privateVariable -> `, myModule.privateVariable);
