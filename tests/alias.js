const assert = require('assert');
const {describe} = require('..').core;
const {alias} = require('..').alias;

// alias should return promise from description
(() => {

    let Scope = {i: 1};
    let firstDescription = describe('', ({scope}) => {
        scope.i++;

        return scope;
    });
    let secondDescription = describe('', ({scope}) => {
        assert.ok(2 === scope.i);
    });

    alias(firstDescription(), Scope)
        .then(secondDescription())
        .catch(({error}) => console.log(error));
})();
