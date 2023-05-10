// Revealing Module pattern
const myRevealingModule = (function () {
    let privateVariable = 'I am a private variable'

    function privateFunction() {
        console.log(privateVariable);
    }

    function publicFunction() {
        privateFunction()
    }

    return {
        publicFunction: publicFunction
    }
})()
console.log(`myRevealingModule.publicFunction -> `, myRevealingModule.publicFunction());
console.log(`myRevealingModule.privateFunction -> `, myRevealingModule.privateFunction);
