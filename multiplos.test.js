const { somar } = require('./multiplos')

describe('Calculo da soma dos numeros inteiros abaixo de 1000', () => {

    it('Calculo da soma dos numeros inteiros abaixo de 1000', () => {
        expect(somar(5,7)).toBe(156361)
        expect(somar(6,8)).toBe(124502)
        expect(somar(4,9)).toBe(166836)
    });
    
});