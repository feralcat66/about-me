import isYes from './is-yes.js';
const test = QUnit.test;



//defining the test 
test('Yes is true', assert => {
    const input = 'Yes';
    const expected = true;

    const result = isYes(input);
    assert.equal(result, expected);
});

test('Y is true', assert => {
    const input = 'Y'
    const expected = true;

    const result = isYes(input);
    assert.equal(result, expected);
});

test('what is false', assert => {
    const input = 'what';
    const expected = false;
    
    const result = isYes(input);
    assert.equal(result, expected)
}); 
