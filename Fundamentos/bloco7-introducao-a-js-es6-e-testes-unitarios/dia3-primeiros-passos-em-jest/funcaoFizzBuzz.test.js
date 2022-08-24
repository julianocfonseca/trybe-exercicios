const myFizzBuzz = require('./funcaoFIzzBuzz');

describe('Testa a função FizzBuzz', () => {
    it('Testa número divisivel por 3 e por 5', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('Testa número divisivel por 3', () => {
        expect(myFizzBuzz(6)).toEqual('fizz');
    });
    it('Testa número divisivel por 5', () => {
        expect(myFizzBuzz(10)).toEqual('buzz');
    });
    it('Testa número não divisivel por 3 nem por 5', () => {
        expect(myFizzBuzz(13)).toEqual(13);
    });
})